const bcrypt = require("bcrypt");
const crypto = require("crypto");
const UserModel = require("../model/UserModel");
const sendVerificationEmail = require("./mailService");

async function registerUser(user) {
  const { toko_id, email, password } = user;

  if (!toko_id || !email || !password) {
    throw new Error("Data tidak lengkap");
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
    verificationToken,
  });

  await sendVerificationEmail(email, verificationToken);

  return userId;
}

module.exports = { registerUser };
