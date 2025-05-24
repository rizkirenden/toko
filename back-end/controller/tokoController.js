const { createToko } = require("../service/tokoService");

async function createTokoController(req, res) {
  try {
    const { nama_toko, nama_pemilik, no_telp, alamat_toko, alamat_pemilik } =
      req.body;

    if (
      !nama_toko ||
      !nama_pemilik ||
      !no_telp ||
      !alamat_toko ||
      !alamat_pemilik
    ) {
      return res.status(400).json({
        error: "Masih ada data yang kosong",
      });
    }

    const insertId = await createToko({
      nama_toko,
      nama_pemilik,
      no_telp,
      alamat_toko,
      alamat_pemilik,
    });

    return res.status(201).json({
      message: "Toko berhasil dibuat",
      toko_id: insertId,
    });
  } catch (error) {
    console.error("Error saat membuat toko:", error);
    return res.status(500).json({
      error: "Terjadi kesalahan pada server",
    });
  }
}

module.exports = { createTokoController };
