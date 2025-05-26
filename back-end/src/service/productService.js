const ProductModel = require("../model/productModel");

async function getAllProduct() {
  return await ProductModel.getAllProduct();
}

async function createProduct(product) {
  return await ProductModel.insertProduct(product);
}

async function updateProduct(product_id, product) {
  return await ProductModel.updateProduct(product_id, product);
}

async function deleteProduct(product_id) {
  return await ProductModel.deleteProduct(product_id);
}

async function editProduct(product_id) {
  return await ProductModel.editProduct(product_id);
}

module.exports = {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  editProduct,
};
