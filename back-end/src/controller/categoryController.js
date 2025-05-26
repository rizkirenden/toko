const {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../service/categoryService");

async function getAllCategoryController(req, res) {
  try {
    categories = await getAllCategory();
    return res
      .status(200)
      .json({ messsage: "Kategori berhasil ditampilkan", data: categories });
  } catch (error) {
    console.error("Error saat mengambil kategori", error);
    return res.status(500).json({
      error: "Terjadi kesalahan pada server",
    });
  }
}

async function createCategoryController(req, res) {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        error: "name dan description wajib diisi",
      });
    }

    const insertedId = await createCategory({ name, description });

    return res.status(201).json({
      message: "Kategori berhasil dibuat",
      category_id: insertedId,
    });
  } catch (error) {
    console.error("Error saat membuat kategori:", error);
    return res.status(500).json({
      error: "Terjadi kesalahan pada server",
    });
  }
}

async function updateCategoryController(req, res) {
  try {
    const { category_id } = req.params;
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        error: "name dan description wajib diisi",
      });
    }

    const updated = await updateCategory(category_id, { name, description });
    if (!updated) {
      return res.status(400).json({ error: "Kategori tidak ditemukan " });
    }

    return res.status(201).json({
      message: "Kategori berhasil diperbarui",
    });
  } catch (error) {
    console.error("Error saat memperbarui kategori", error);
    return res.status(500).json({
      error: "Terjadi kesalahan pada server",
    });
  }
}

async function deleteCategoryController(req, res) {
  try {
    const { category_id } = req.params;
    const deleted = await deleteCategory(category_id);

    if (!deleted) {
      return res.status(400).json({ error: "Kategori tidak ditemukan" });
    }
    return res.status(200).json({ message: "Kategori berhasil dihapus" });
  } catch (error) {
    console.error("Error saat menghapus kategori", error);
    return res.status(500).json({
      error: "Terjadi kesalahan pada server",
    });
  }
}

module.exports = {
  getAllCategoryController,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
};
