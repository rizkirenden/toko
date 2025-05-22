const { createCategory } = require("../service/categoryService");

async function createCategoryController(req, res) {
  try {
    const { category_id, name, description } = req.body;

    if (!category_id || !name) {
      return res.status(400).json({
        error: "category_id dan name wajib diisi",
      });
    }

    const insertedId = await createCategory({ category_id, name, description });

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

module.exports = { createCategoryController };
