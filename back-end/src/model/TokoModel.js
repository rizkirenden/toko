const pool = require("../config/database");

const TokoModel = {
  async getAllToko() {
    const query = `SELECT * FROM tokos`;
    const [rows] = await pool.query(query);
    return rows;
  },

  async insertToko(toko) {
    const { nama_toko, nama_pemilik, no_telp, alamat_toko, alamat_pemilik } =
      toko;

    const query = ` INSERT INTO tokos (nama_toko, nama_pemilik, no_telp, alamat_toko, alamat_pemilik) VALUES (?, ?, ?, ?, ?)`;

    const values = [
      nama_toko,
      nama_pemilik,
      no_telp,
      alamat_toko,
      alamat_pemilik,
    ];
    const [result] = await pool.query(query, values);
    return result.insertId;
  },

  async updateToko(toko_id, toko) {
    const { nama_toko, nama_pemilik, no_telp, alamat_toko, alamat_pemilik } =
      toko;
    const query = `UPDATE tokos SET nama_toko = ?, nama_pemilik = ?, no_telp = ?, alamat_toko = ?, alamat_pemilik = ? WHERE toko_id = ?`;
    const value = [
      nama_toko,
      nama_pemilik,
      no_telp,
      alamat_toko,
      alamat_pemilik,
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
