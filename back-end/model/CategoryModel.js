const pool = require("../config/database");

const CategoryModel = {
  async insertCategory(category) {
    const { name, description } = category;

    const query = ` INSERT INTO categorys (
    name, description
    ) VALUES (?, ?)`;

    const values = [name, description];
    const [result] = await pool.query(query, values);
    return result.insertId;
  },
};
module.exports = CategoryModel;
