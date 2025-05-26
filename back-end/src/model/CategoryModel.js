const pool = require("../config/database");

const CategoryModel = {
  async getAllCategory() {
    const query = `SELECT * FROM categorys `;
    const [rows] = await pool.query(query);
    return rows;
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
