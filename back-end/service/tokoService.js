const TokoModel = require("../model/TokoModels");

async function getAllToko() {
  return await TokoModel.getAllToko();
}

async function createToko(toko) {
  return await TokoModel.insertToko(toko);
}

async function updateToko(toko_id, toko) {
  return await TokoModel.updateToko(toko_id, toko);
}

async function deleteToko(toko_id) {
  return await TokoModel.deleteToko(toko_id);
}

async function editToko(toko_id) {
  return await TokoModel.editToko(toko_id);
}

module.exports = { getAllToko, createToko, updateToko, deleteToko, editToko };
