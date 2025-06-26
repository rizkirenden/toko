const pool = require("../config/database");

const CategoryModel = {
  async getAllCategory() {
    const query = `SELECT * FROM categorys `;
    const [rows] = await pool.query(query);
    return rows;
  },

  async getAllCategoryParams({ limit, offset, search } = {}) {
    let dataQuery = "SELECT * FROM categorys";
    let dataParams = [];

    let countQuery = "SELECT COUNT (*) AS total FROM categorys";
    let countParams = [];

    if (search) {
      const searchCondition = "WHERE name LIKE ? OR description LIKE ?";
      dataQuery += searchCondition;
      countQuery += searchCondition;
      const searchParam = `%${search}%`;
      dataParams.push(searchParam, searchParam);
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

  async insertCategory(category) {
    const { name, description } = category;

    const query = ` INSERT INTO categorys (
    name, description
    ) VALUES (?, ?)`;

    const values = [name, description];
    const [result] = await pool.query(query, values);
    return result.insertId;
  },

  async updateCategory(category_id, category) {
    const { name, description } = category;
    const query = `UPDATE categorys SET name = ?, description = ? WHERE category_id = ?`;
    const values = [name, description, category_id];
    const [result] = await pool.query(query, values);
    return result.affectedRows;
  },

  async deleteCategory(category_id) {
    const query = `DELETE FROM categorys WHERE category_id = ?`;
    const [result] = await pool.query(query, [category_id]);
    return result.affectedRows;
  },

  async editCategory(category_id) {
    const query = `SELECT * FROM categorys WHERE category_id = ?`;
    const [rows] = await pool.query(query, [category_id]);
    return rows[0];
  },
};
module.exports = CategoryModel;
