const ProductModel = require("../model/productModel");

async function getAllProduct(filters = {}) {
  return await ProductModel.getAllProduct(filters);
}

async function getAllProductParams({ limit, offset, search, toko_id } = {}) {
  try {
    // Validate parameters
    if (limit && isNaN(limit)) throw new Error("Limit harus berupa angka");
    if (offset && isNaN(offset)) throw new Error("Offset harus berupa angka");

    // Build base queries
    let dataQuery = `
      SELECT 
        p.product_id,
        p.name,
        p.harga,
        p.deskripsi_bahan,
        p.gambar_product,
        p.video_product,
        p.status,
        c.name AS nama_kategori,
        t.nama_toko,
        t.toko_id
      FROM products p
      JOIN categorys c ON p.category_id = c.category_id
      JOIN tokos t ON p.toko_id = t.toko_id
    `;

    let countQuery = `SELECT COUNT(*) AS total FROM products p`;

    const params = [];
    const countParams = [];
    let whereAdded = false;

    // Add toko filter if provided
    if (toko_id) {
      dataQuery += ` WHERE p.toko_id = ?`;
      countQuery += ` WHERE p.toko_id = ?`;
      params.push(toko_id);
      countParams.push(toko_id);
      whereAdded = true;
    }

    // Add search filter if provided
    if (search) {
      const searchCondition = ` (p.name LIKE ? OR c.name LIKE ?)`;
      dataQuery += whereAdded ? " AND" : " WHERE";
      dataQuery += searchCondition;
      countQuery += whereAdded ? " AND" : " WHERE";
      countQuery += ` (p.name LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`);
      countParams.push(`%${search}%`);
    }

    // Add pagination
    dataQuery += ` ORDER BY p.product_id DESC LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    // Execute queries
    const [totalRows] = await pool.query(countQuery, countParams);
    const [rows] = await pool.query(dataQuery, params);

    return {
      data: rows,
      total: totalRows[0]?.total || 0,
    };
  } catch (error) {
    console.error("Error in getAllProductParams service:", error);
    throw error;
  }
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
  getAllProductParams,
  createProduct,
  updateProduct,
  deleteProduct,
  editProduct,
};
