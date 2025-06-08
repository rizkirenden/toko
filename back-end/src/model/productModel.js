const pool = require("../config/database");

const ProductModel = {
  async getAllProduct() {
    const query = `
    SELECT 
      products.*, 
      tokos.nama_toko,
      categorys.name AS nama_kategori
    FROM products
    JOIN tokos ON products.toko_id = tokos.toko_id
    JOIN categorys ON products.category_id = categorys.category_id
  `;
    const [rows] = await pool.query(query);
    return rows;
  },

  async insertProduct(product) {
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

    const query = `
      INSERT INTO products 
      (toko_id, category_id, name, harga, deskripsi_bahan, gambar_product, video_product, status) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      toko_id,
      category_id,
      name,
      harga,
      deskripsi_bahan,
      gambar_product,
      video_product,
      status,
    ];
    const [result] = await pool.query(query, values);
    return result.insertId;
  },

  async updateProduct(product_id, product) {
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

    const query = `
      UPDATE products SET 
      toko_id = ?, 
      category_id = ?, 
      name = ?, 
      harga = ?, 
      deskripsi_bahan = ?, 
      gambar_product = ?, 
      video_product = ?, 
      status = ?
      WHERE product_id = ?`;

    const values = [
      toko_id,
      category_id,
      name,
      harga,
      deskripsi_bahan,
      gambar_product,
      video_product,
      status,
      product_id,
    ];

    const [result] = await pool.query(query, values);
    return result.affectedRows;
  },

  async deleteProduct(product_id) {
    const query = `DELETE FROM products WHERE product_id = ?`;
    const [result] = await pool.query(query, [product_id]);
    return result.affectedRows;
  },

  async editProduct(product_id) {
    const query = `SELECT * FROM products WHERE product_id = ?`;
    const [rows] = await pool.query(query, [product_id]);
    return rows[0];
  },
};

module.exports = ProductModel;
