const UserModel = require("../model/UserModel");

async function verifyEmail(token) {
  console.log("Token masuk:", token);

  const user = await UserModel.findByVerificationToken(token);
  console.log("User ditemukan:", user);

  if (!user) throw new Error("Token tidak valid");

  const success = await UserModel.verifyEmail(token);
  console.log("Berhasil update?", success);

  if (!success) throw new Error("Token sudah digunakan atau tidak valid");

  return true;
}

module.exports = { verifyEmail };
