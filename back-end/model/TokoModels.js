const pool = require("../config/database");

const TokoModel = {
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
};
module.exports = TokoModel;
