const pool = require("../config/database");

const TokoModel = {
  async getAllTokos() {
    const query = `SELECT * FROM tokos`;
    const [rows] = await pool.query(query);
    return rows;
  },

  async getAllToko({ limit, offset, search } = {}) {
    let dataQuery = "SELECT * FROM tokos";
    let dataParams = [];

    let countQuery = "SELECT COUNT(*) AS total FROM tokos";
    let countParams = [];

    if (search) {
      const searchCondition = " WHERE nama_toko LIKE ? OR nama_pemilik LIKE ?";
      dataQuery += searchCondition;
      countQuery += searchCondition;
      const searchParam = `%${search}%`;
      dataParams.push(searchParam, searchParam);
      countParams.push(searchParam, searchParam);
    }

    if (limit !== undefined) {
      dataQuery += " LIMIT ?";
      dataParams.push(limit);

      if (offset !== undefined) {
        dataQuery += " OFFSET ?";
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

  async insertToko(toko) {
    const {
      nama_toko,
      nama_pemilik,
      no_telp,
      alamat_toko,
      alamat_pemilik,
      toko_logo,
    } = toko;

    const query = ` INSERT INTO tokos (nama_toko, nama_pemilik, no_telp, alamat_toko, alamat_pemilik, toko_logo) VALUES (?, ?, ?, ?, ?, ?)`;

    const values = [
      nama_toko,
      nama_pemilik,
      no_telp,
      alamat_toko,
      alamat_pemilik,
      toko_logo,
    ];
    const [result] = await pool.query(query, values);
    return result.insertId;
  },

  async updateToko(toko_id, toko) {
    const {
      nama_toko,
      nama_pemilik,
      no_telp,
      alamat_toko,
      alamat_pemilik,
      toko_logo,
    } = toko;
    const query = `UPDATE tokos SET nama_toko = ?, nama_pemilik = ?, no_telp = ?, alamat_toko = ?, alamat_pemilik = ?, toko_logo = ? WHERE toko_id = ?`;
    const value = [
      nama_toko,
      nama_pemilik,
      no_telp,
      alamat_toko,
      alamat_pemilik,
      toko_logo,
      toko_id,
    ];
    const [result] = await pool.query(query, value);
    return result.affectedRows;
  },

  async deleteToko(toko_id) {
    const query = `DELETE FROM tokos WHERE toko_id = ?`;
    const [result] = await pool.query(query, [toko_id]);
    return result.affectedRows;
  },

  async editToko(toko_id) {
    const query = `SELECT * FROM tokos WHERE toko_id = ?`;
    const [rows] = await pool.query(query, [toko_id]);
    return rows[0];
  },
};
module.exports = TokoModel;
