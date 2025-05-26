const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  editProduct,
} = require("../service/productService");

async function getAllProductController(req, res) {
  try {
    const products = await getAllProduct();
    return res.status(200).json({
      message: "Data produk berhasil ditampilkan",
      data: products,
    });
  } catch (error) {
    console.error("Error saat mengambil data produk:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function createProductController(req, res) {
  try {
    const productData = req.body;

    if (req.files) {
      if (req.files.gambar) {
        productData.gambar_product = req.files.gambar[0].filename;
      }
      if (req.files.video) {
        productData.video_product = req.files.video[0].filename;
      }
    }

    const insertId = await createProduct(productData);

    return res.status(201).json({
      message: "Produk berhasil dibuat",
      product_id: insertId,
    });
  } catch (error) {
    if (error.message.startsWith("VALIDATION_ERROR")) {
      return res.status(400).json({ error: error.message.split(": ")[1] });
    }
    console.error("Error saat membuat produk:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function updateProductController(req, res) {
  try {
    const { product_id } = req.params;
    const productData = req.body;

    if (req.files) {
      if (req.files.gambar) {
        productData.gambar_product = req.files.gambar[0].filename;
      }
      if (req.files.video) {
        productData.video_product = req.files.video[0].filename;
      }
    }

    await updateProduct(product_id, productData);

    return res.status(200).json({
      message: "Produk berhasil diperbarui",
    });
  } catch (error) {
    if (error.message.startsWith("VALIDATION_ERROR")) {
      return res.status(400).json({ error: error.message.split(": ")[1] });
    }
    if (error.message.startsWith("NOT_FOUND")) {
      return res.status(404).json({ error: error.message.split(": ")[1] });
    }
    console.error("Error saat memperbarui produk:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function deleteProductController(req, res) {
  try {
    const { product_id } = req.params;
    await deleteProduct(product_id);
    return res.status(200).json({
      message: "Produk berhasil dihapus",
    });
  } catch (error) {
    if (error.message.startsWith("NOT_FOUND")) {
      return res.status(404).json({ error: error.message.split(": ")[1] });
    }
    console.error("Error saat menghapus produk:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function editProductController(req, res) {
  try {
    const { product_id } = req.params;
    const product = await editProduct(product_id);
    return res.status(200).json({
      message: "Data produk berhasil diambil",
      data: product,
    });
  } catch (error) {
    if (error.message.startsWith("NOT_FOUND")) {
      return res.status(404).json({ error: error.message.split(": ")[1] });
    }
    console.error("Error saat mengambil data produk:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

module.exports = {
  getAllProductController,
  createProductController,
  updateProductController,
  deleteProductController,
  editProductController,
};
