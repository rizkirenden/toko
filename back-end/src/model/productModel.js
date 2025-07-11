const pool = require("../config/database");

const ProductModel = {
  async getAllProduct(filters = {}) {
    let query = `
    SELECT 
      products.*, 
      tokos.nama_toko,
      tokos.no_telp,
      categorys.name AS nama_kategori
    FROM products
    JOIN tokos ON products.toko_id = tokos.toko_id
    JOIN categorys ON products.category_id = categorys.category_id
    WHERE 1=1
  `;

    const params = [];

    if (filters.kategori) {
      query += " AND categorys.category_id = ?";
      params.push(filters.kategori);
    }

    if (filters.toko) {
      query += " AND tokos.toko_id = ?";
      params.push(filters.toko);
    }

    if (filters.name) {
      query += " AND products.name LIKE ?";
      params.push(`%${filters.name}%`);
    }

    const [rows] = await pool.query(query, params);
    return rows;
  },

  async getAllProductParams({ limit, offset, search } = {}) {
    let dataQuery = `
    SELECT 
      products.*, 
      tokos.nama_toko,
      tokos.no_telp,
      categorys.name AS nama_kategori
    FROM products
    JOIN tokos ON products.toko_id = tokos.toko_id
    JOIN categorys ON products.category_id = categorys.category_id
    WHERE 1=1
  `;
    let dataParams = [];

    let countQuery = `
    SELECT COUNT(*) AS total
    FROM products
    JOIN tokos ON products.toko_id = tokos.toko_id
    JOIN categorys ON products.category_id = categorys.category_id
    WHERE 1=1
  `;
    let countParams = [];

    if (search) {
      const searchCondition = `
      AND (
        products.name LIKE ? 
        OR tokos.nama_toko LIKE ? 
        OR categorys.name LIKE ?
      )
    `;
      const searchParam = `%${search}%`;
      dataQuery += searchCondition;
      countQuery += searchCondition;
      dataParams.push(searchParam, searchParam, searchParam);
      countParams.push(searchParam, searchParam, searchParam);
    }

    if (limit !== undefined) {
      dataQuery += " LIMIT ?";
      dataParams.push(limit);

      if (offset !== undefined) {
        dataQuery += " OFFSET ?";
        dataParams.push(offset);
      }
    }

    const [totalRows] = await pool.query(countQuery, countParams);
    const [rows] = await pool.query(dataQuery, dataParams);

    return {
      data: rows,
      total: totalRows[0].total,
    };
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
