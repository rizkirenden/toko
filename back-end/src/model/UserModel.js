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

  async getAllUser({ limit, offset, search } = {}) {
    let dataParams = [];
    let countParams = [];

    let baseQuery = `
    FROM users
    LEFT JOIN tokos ON users.toko_id = tokos.toko_id
  `;

    let whereClause = "";
    if (search) {
      whereClause = `WHERE users.email LIKE ? OR users.role LIKE ? OR tokos.nama_toko LIKE ?`;
      const searchParam = `%${search}%`;
      dataParams.push(searchParam, searchParam, searchParam);
      countParams.push(searchParam, searchParam, searchParam);
    }

    let dataQuery = `SELECT users.*, COALESCE(tokos.nama_toko, 'N/A') AS nama_toko ${baseQuery} ${whereClause}`;
    let countQuery = `SELECT COUNT(*) AS total ${baseQuery} ${whereClause}`;

    if (limit !== undefined) {
      dataQuery += ` LIMIT ?`;
      dataParams.push(limit);

      if (offset !== undefined) {
        dataQuery += ` OFFSET ?`;
        dataParams.push(offset);
      }
    }

    const [totalRows] = await pool.query(countQuery, countParams);
    const [rows] = await pool.query(dataQuery, dataParams);

    return {
      data: rows,
      total: totalRows[0].total,
    };
  },
  async create({ toko_id, email, role, hashedPassword, verificationToken }) {
    const query = `
    INSERT INTO users (toko_id, email, password, role, verification_token, is_verified)
    VALUES (?, ?, ?, ?, ?, 0)
  `;
    // Allow toko_id to be null for admin users
    const values = [
      toko_id || null,
      email,
      hashedPassword,
      role,
      verificationToken,
    ];
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

  async update(user_id, { toko_id, email, password, role }) {
    const query = `
    UPDATE users SET 
      toko_id = ?, 
      email = ?, 
      password = ?, 
      role = ?
    WHERE user_id = ?`;

    const values = [toko_id, email, password, role, user_id];
    const [result] = await pool.query(query, values);
    return result.affectedRows;
  },

  async delete(user_id) {
    const [result] = await pool.query("DELETE FROM users WHERE user_id = ?", [
      user_id,
    ]);
    return result.affectedRows > 0;
  },

  async editUser(user_id) {
    const [rows] = await pool.query("SELECT * FROM users WHERE user_id = ?", [
      user_id,
    ]);
    return rows[0];
  },
};

module.exports = UserModel;
