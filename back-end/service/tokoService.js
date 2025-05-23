const TokoModel = require("../model/TokoModels");

async function createToko(toko) {
  return await TokoModel.insertToko(toko);
}

module.exports = { createToko };
