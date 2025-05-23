const pool = require("../config/database");

const UserModel = {
  async findByEmail(email) {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0];
  },

  async findByVerificationToken(token) {
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE verification_token = ?",
      [token]
    );
    return rows[0];
  },

  async create({ toko_id, email, role, hashedPassword, verificationToken }) {
    const query = `
      INSERT INTO users (toko_id, email, password, role, verification_token, is_verified)
      VALUES (?, ?, ?, ?, 0)
    `;
    const values = [toko_id, email, role, hashedPassword, verificationToken];
    const [result] = await pool.query(query, values);
    return result.insertId;
  },

  async verifyEmail(token) {
    const [result] = await pool.query(
      "UPDATE users SET is_verified = 1, verification_token = NULL WHERE verification_token = ?",
      [token]
    );
    return result.affectedRows > 0;
  },
};

module.exports = UserModel;
