const bcrypt = require("bcrypt");
const crypto = require("crypto");
const UserModel = require("../model/UserModel");
const sendVerificationEmail = require("./mailService");

async function getAllUser({ page = 1, limit = 5, search = "" } = {}) {
  return await UserModel.getAllUser({
    limit,
    offset: (page - 1) * limit,
    search,
  });
}

// In registerService.js
async function registerUser(user) {
  const { email, password, role } = user;
  let { toko_id } = user;

  if (!email || !password || !role) {
    throw new Error("Data tidak lengkap");
  }

  if (!["admin", "pemilik"].includes(role)) {
    throw new Error("Role tidak valid");
  }

  // Make toko_id required only for pemilik (owner) role
  if (role === "pemilik" && !toko_id) {
    throw new Error("Toko ID diperlukan untuk role pemilik");
  }

  const existingUser = await UserModel.findByEmail(email);
  if (existingUser) {
    throw new Error("Email sudah terdaftar");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationToken = crypto.randomBytes(32).toString("hex");

  const userId = await UserModel.create({
    toko_id: role === "admin" ? null : toko_id, // Set toko_id to null for admin
    email,
    hashedPassword,
    role,
    verificationToken,
  });

  await sendVerificationEmail(email, verificationToken);

  return userId;
}

async function updateUser(user_id, data) {
  const { email, password, role } = data;
  let { toko_id } = data;

  if (!email || !password || !role) {
    throw new Error("Data tidak lengkap");
  }

  // Make toko_id required only for pemilik (owner) role
  if (role === "pemilik" && !toko_id) {
    throw new Error("Toko ID diperlukan untuk role pemilik");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const success = await UserModel.update(user_id, {
    toko_id: role === "admin" ? null : toko_id, // Set toko_id to null for admin
    email,
    role,
    password: hashedPassword,
  });

  if (!success) {
    throw new Error("Gagal memperbarui user");
  }

  return true;
}

async function deleteUser(user_id) {
  const success = await UserModel.delete(user_id);

  if (!success) {
    throw new Error("Gagal menghapus user");
  }

  return true;
}

async function editUser(user_id) {
  const user = await UserModel.editUser(user_id);
  if (!user) {
    throw new Error("User tidak ditemukan");
  }
  return user;
}
module.exports = { getAllUser, registerUser, updateUser, deleteUser, editUser };
