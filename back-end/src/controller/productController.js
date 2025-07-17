const {
  getAllProduct,
  getAllProductParams,
  createProduct,
  updateProduct,
  deleteProduct,
  editProduct,
} = require("../service/productService");

async function getAllProductController(req, res) {
  try {
    const filters = {
      kategori: req.query.kategori || null,
      toko: req.query.toko || null,
      name: req.query.name || null,
    };

    const products = await getAllProduct(filters);
    return res.status(200).json({
      message: "Data produk berhasil ditampilkan",
      data: products,
    });
  } catch (error) {
    console.error("Error saat mengambil data produk:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function getAllProductParamsController(req, res) {
  try {
    // Validate and parse query parameters
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit) || 5, 1), 100);
    const search = req.query.search || "";
    const requestedTokoId = req.query.toko;

    // Get user info from auth middleware
    const { role, toko_id: userTokoId } = req.user;

    // Authorization logic
    let finalTokoId;
    if (role === "admin") {
      // Admin can see all or filter by toko_id
      finalTokoId = requestedTokoId;
    } else if (role === "toko" || role === "pemilik") {
      // Toko users can only see their own products
      if (requestedTokoId && requestedTokoId !== userTokoId) {
        return res.status(403).json({
          error: "Akses ditolak",
          message: "Anda hanya bisa melihat produk toko Anda sendiri",
          your_toko_id: userTokoId,
        });
      }
      finalTokoId = userTokoId;
    } else {
      return res.status(403).json({
        error: "Akses ditolak",
        message: "Role tidak diizinkan mengakses endpoint ini",
      });
    }

    // Calculate offset for pagination
    const offset = (page - 1) * limit;

    // Get data from service
    const produkData = await getAllProductParams({
      limit,
      offset,
      search,
      toko_id: finalTokoId,
    });

    // Prepare response
    const response = {
      success: true,
      message: "Data produk berhasil diambil",
      data: produkData.data,
      meta: {
        page,
        limit,
        total_items: produkData.total,
        total_pages: Math.ceil(produkData.total / limit),
        current_toko_id: finalTokoId,
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in getAllProductParamsController:", error);
    return res.status(500).json({
      error: "Terjadi kesalahan server",
      details: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
}

async function createProductController(req, res) {
  try {
    const productData = req.body;

    if (req.files) {
      if (req.files.gambar_product) {
        productData.gambar_product = req.files.gambar_product[0].filename;
      }
      if (req.files.video_product) {
        productData.video_product = req.files.video_product[0].filename;
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
      if (req.files.gambar_product) {
        productData.gambar_product = req.files.gambar_product[0].filename;
      }
      if (req.files.video_product) {
        productData.video_product = req.files.video_product[0].filename;
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
  getAllProductParamsController,
  createProductController,
  updateProductController,
  deleteProductController,
  editProductController,
};
