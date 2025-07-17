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

  async getAllProductParams({ limit, offset, search, toko_id } = {}) {
    let dataQuery = `
    SELECT 
      p.*, 
      c.name AS nama_kategori,
      t.nama_toko
    FROM products p
    JOIN categorys c ON p.category_id = c.category_id
    JOIN tokos t ON p.toko_id = t.toko_id
    ${toko_id ? "WHERE p.toko_id = ?" : ""}
  `;

    let countQuery = `
    SELECT COUNT(*) AS total 
    FROM products p
    ${toko_id ? "WHERE p.toko_id = ?" : ""}
  `;

    const params = [];
    const countParams = [];

    if (toko_id) {
      params.push(toko_id);
      countParams.push(toko_id);
    }

    if (search) {
      const searchCondition = ` (p.name LIKE ? OR c.name LIKE ?)`;
      dataQuery += toko_id ? " AND" : " WHERE";
      dataQuery += searchCondition;
      params.push(`%${search}%`, `%${search}%`);

      countQuery += toko_id ? " AND" : " WHERE";
      countQuery += ` (p.name LIKE ?)`;
      countParams.push(`%${search}%`);
    }

    if (limit !== undefined) {
      dataQuery += ` LIMIT ?`;
      params.push(limit);

      if (offset !== undefined) {
        dataQuery += ` OFFSET ?`;
        params.push(offset);
      }
    }

    const [totalRows] = await pool.query(countQuery, countParams);
    const [rows] = await pool.query(dataQuery, params);

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
