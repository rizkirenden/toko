const {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  editCategory,
} = require("../service/categoryService");

async function getAllCategoryController(req, res) {
  try {
    const categories = await getAllCategory();
    return res.status(200).json({
      message: "Kategori berhasil ditampilkan",
      data: categories,
    });
  } catch (error) {
    console.error("Error saat mengambil kategori:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function createCategoryController(req, res) {
  try {
    const insertedId = await createCategory(req.body);
    return res.status(201).json({
      message: "Kategori berhasil dibuat",
      category_id: insertedId,
    });
  } catch (error) {
    if (error.message.startsWith("VALIDATION_ERROR")) {
      return res.status(400).json({ error: error.message.split(": ")[1] });
    }
    console.error("Error saat membuat kategori:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function updateCategoryController(req, res) {
  try {
    await updateCategory(req.params.category_id, req.body);
    return res.status(200).json({
      message: "Kategori berhasil diperbarui",
    });
  } catch (error) {
    if (error.message.startsWith("VALIDATION_ERROR")) {
      return res.status(400).json({ error: error.message.split(": ")[1] });
    }
    if (error.message.startsWith("NOT_FOUND")) {
      return res.status(404).json({ error: error.message.split(": ")[1] });
    }
    console.error("Error saat memperbarui kategori:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function deleteCategoryController(req, res) {
  try {
    await deleteCategory(req.params.category_id);
    return res.status(200).json({ message: "Kategori berhasil dihapus" });
  } catch (error) {
    if (error.message.startsWith("NOT_FOUND")) {
      return res.status(404).json({ error: error.message.split(": ")[1] });
    }
    console.error("Error saat menghapus kategori:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function editCategoryController(req, res) {
  try {
    const category = await editCategory(req.params.category_id);

    if (!category) {
      return res.status(404).json({ error: "Kategori tidak ditemukan" });
    }

    return res.status(200).json({
      message: "Data kategori berhasil diambil",
      data: category,
    });
  } catch (error) {
    console.error("Error saat mengambil data kategori:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

module.exports = {
  getAllCategoryController,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
  editCategoryController,
};
