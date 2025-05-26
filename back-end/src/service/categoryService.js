const CategoryModel = require("../model/CategoryModel");

async function getAllCategory() {
  return await CategoryModel.getAllCategory();
}

async function createCategory(category) {
  return await CategoryModel.insertCategory(category);
}

async function updateCategory(category_id, category) {
  return await CategoryModel.updateCategory(category_id, category);
}

async function deleteCategory(category_id) {
  return await CategoryModel.deleteCategory(category_id);
}

async function editCategory(category_id) {
  return await CategoryModel.editCategory(category_id);
}

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  editCategory,
};
