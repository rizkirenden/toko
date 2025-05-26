const ProductModel = require("../model/productModel");

async function getAllProduct() {
  return await ProductModel.getAllProduct();
}

async function createProduct(product) {
  const {
    toko_id,
    category_id,
    name,
    harga,
    deskripsi_bahan,
    gambar_product,
    video_product,
    status,
  } = product;

  if (
    !toko_id ||
    !category_id ||
    !name ||
    !harga ||
    !deskripsi_bahan ||
    !gambar_product ||
    !video_product ||
    !status
  ) {
    throw new Error("VALIDATION_ERROR: Semua field wajib diisi");
  }

  return await ProductModel.insertProduct(product);
}

async function updateProduct(product_id, product) {
  const {
    toko_id,
    category_id,
    name,
    harga,
    deskripsi_bahan,
    gambar_product,
    video_product,
    status,
  } = product;

  if (
    !toko_id ||
    !category_id ||
    !name ||
    !harga ||
    !deskripsi_bahan ||
    !gambar_product ||
    !video_product ||
    !status
  ) {
    throw new Error("VALIDATION_ERROR: Semua field wajib diisi");
  }

  const updated = await ProductModel.updateProduct(product_id, product);
  if (!updated) {
    throw new Error("NOT_FOUND: Produk tidak ditemukan");
  }
  return true;
}

async function deleteProduct(product_id) {
  const deleted = await ProductModel.deleteProduct(product_id);
  if (!deleted) {
    throw new Error("NOT_FOUND: Produk tidak ditemukan");
  }
  return true;
}

async function editProduct(product_id) {
  const product = await ProductModel.editProduct(product_id);
  if (!product) {
    throw new Error("NOT_FOUND: Produk tidak ditemukan");
  }
  return product;
}

module.exports = {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  editProduct,
};
