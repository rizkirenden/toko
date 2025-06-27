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

async function registerUser(user) {
  const { toko_id, email, password, role } = user;

  if (!toko_id || !email || !password || !role) {
    throw new Error("Data tidak lengkap");
  }

  if (!["admin", "pemilik"].includes(role)) {
    throw new Error("Role tidak valid");
  }

  const existingUser = await UserModel.findByEmail(email);
  if (existingUser) {
    throw new Error("Email sudah terdaftar");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationToken = crypto.randomBytes(32).toString("hex");

  const userId = await UserModel.create({
    toko_id,
    email,
    hashedPassword,
    role,
    verificationToken,
  });

  await sendVerificationEmail(email, verificationToken);

  return userId;
}
async function updateUser(user_id, data) {
  const { toko_id, email, password, role } = data;

  if (!toko_id || !email || !password || !role) {
    throw new Error("Data tidak lengkap");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const success = await UserModel.update(user_id, {
    toko_id,
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
