const TokoModel = require("../model/TokoModel");

async function getAllToko() {
  return await TokoModel.getAllToko();
}

async function createToko(toko) {
  const { nama_toko, nama_pemilik, no_telp, alamat_toko, alamat_pemilik } =
    toko;

  if (
    !nama_toko ||
    !nama_pemilik ||
    !no_telp ||
    !alamat_toko ||
    !alamat_pemilik
  ) {
    throw new Error("VALIDATION_ERROR: Masih ada data yang kosong");
  }

  return await TokoModel.insertToko(toko);
}

async function updateToko(toko_id, toko) {
  const { nama_toko, nama_pemilik, no_telp, alamat_toko, alamat_pemilik } =
    toko;

  if (
    !nama_toko ||
    !nama_pemilik ||
    !no_telp ||
    !alamat_toko ||
    !alamat_pemilik
  ) {
    throw new Error("VALIDATION_ERROR: Masih ada data yang kosong");
  }

  const updated = await TokoModel.updateToko(toko_id, toko);

  if (!updated) {
    throw new Error("NOT_FOUND: Toko tidak ditemukan");
  }

  return true;
}

async function deleteToko(toko_id) {
  const deleted = await TokoModel.deleteToko(toko_id);
  if (!deleted) {
    throw new Error("NOT_FOUND: Toko tidak ditemukan");
  }
  return true;
}

async function editToko(toko_id) {
  const toko = await TokoModel.editToko(toko_id);
  if (!toko) {
    throw new Error("NOT_FOUND: Toko tidak ditemukan");
  }
  return toko;
}

module.exports = { getAllToko, createToko, updateToko, deleteToko, editToko };
