const { createCategory } = require("../service/categoryService");

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

module.exports = { createCategoryController };
