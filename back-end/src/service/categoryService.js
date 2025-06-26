const CategoryModel = require("../model/CategoryModel");

async function getAllCategory() {
  return await CategoryModel.getAllCategory();
}

async function getAllCategoryParams({ page = 1, limit = 5, search = "" } = {}) {
  return await CategoryModel.getAllCategoryParams({
    limit,
    offset: (page - 1) * limit,
    search,
  });
}

async function createCategory(category) {
  const { name, description } = category;

  if (!name || !description) {
    throw new Error("VALIDATION_ERROR: name dan description wajib diisi");
  }

  return await CategoryModel.insertCategory(category);
}

async function updateCategory(category_id, category) {
  const { name, description } = category;

  if (!name || !description) {
    throw new Error("VALIDATION_ERROR: name dan description wajib diisi");
  }

  const updated = await CategoryModel.updateCategory(category_id, category);
  if (!updated) {
    throw new Error("NOT_FOUND: Kategori tidak ditemukan");
  }

  return true;
}

async function deleteCategory(category_id) {
  const deleted = await CategoryModel.deleteCategory(category_id);
  if (!deleted) {
    throw new Error("NOT_FOUND: Kategori tidak ditemukan");
  }
  return true;
}

async function editCategory(category_id) {
  return await CategoryModel.editCategory(category_id);
}

module.exports = {
  getAllCategory,
  getAllCategoryParams,
  createCategory,
  updateCategory,
  deleteCategory,
  editCategory,
};
