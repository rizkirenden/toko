const pool = require("../config/database");

const CategoryModel = {
  async insertCategory(category) {
    const { category_id, name, description } = category;

    const query = ` INSERT INTO categorys (
    category_id, name, description
    ) VALUES (?, ?, ?)`;

    const values = [category_id, name, description];
    const [result] = await pool.query(query, values);
    return result.insertId;
  },
};
module.exports = CategoryModel;
