const pool = require("../config/database");

const ProductModel = {
  async getAllProduct() {
    const query = `SELECT * FROM products`;
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
      gambar,
      video,
      status,
    } = product;

    const query = `
      INSERT INTO products 
      (toko_id, category_id, name, harga, deskripsi_bahan, gambar, video, status) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      toko_id,
      category_id,
      name,
      harga,
      deskripsi_bahan,
      gambar || null,
      video || null,
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
      gambar,
      video,
      status,
    } = product;

    const query = `
      UPDATE products SET 
      toko_id = ?, 
      category_id = ?, 
      name = ?, 
      harga = ?, 
      deskripsi_bahan = ?, 
      gambar = ?, 
      video = ?, 
      status = ?
      WHERE product_id = ?`;

    const values = [
      toko_id,
      category_id,
      name,
      harga,
      deskripsi_bahan,
      gambar || null,
      video || null,
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
