const CategoryModel = require("../model/CategoryModel");

async function createCategory(category) {
  return await CategoryModel.insertCategory(category);
}

module.exports = { createCategory };
