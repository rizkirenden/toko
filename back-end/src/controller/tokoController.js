const {
  getAllTokos,
  getAllToko,
  createToko,
  updateToko,
  deleteToko,
  editToko,
} = require("../service/tokoService");

async function getAllTokosController(req, res) {
  try {
    const allTokos = await getAllTokos();
    return res.status(200).json({
      message: "Toko berhasil ditampilkan",
      data: allTokos,
    });
  } catch (error) {
    console.error("Errror saat mengambil toko:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function getAllTokoController(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";

    const tokoData = await getAllToko({ page, limit, search });

    return res.status(200).json({
      message: "Data toko berhasil ditampilkan",
      data: tokoData.data,
      total: tokoData.total,
    });
  } catch (error) {
    console.error("Error saat mengambil data toko:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function createTokoController(req, res) {
  try {
    const tokoData = req.body;

    // Ubah dari 'gambar' ke 'toko_logo'
    if (req.files && req.files.toko_logo && req.files.toko_logo[0]) {
      tokoData.toko_logo = req.files.toko_logo[0].filename;
    }

    const insertId = await createToko(tokoData);
    return res.status(201).json({
      message: "Toko berhasil dibuat",
      toko_id: insertId,
    });
  } catch (error) {
    if (error.message.startsWith("VALIDATION_ERROR")) {
      return res.status(400).json({ error: error.message.split(": ")[1] });
    }
    console.error("Error saat membuat toko:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function updateTokoController(req, res) {
  try {
    const { toko_id } = req.params;
    const tokoData = req.body;

    if (req.files && req.files.toko_logo && req.files.toko_logo[0]) {
      tokoData.toko_logo = req.files.toko_logo[0].filename;
    }

    await updateToko(toko_id, tokoData);

    return res.status(200).json({
      message: "Toko berhasil diperbarui",
    });
  } catch (error) {
    if (error.message.startsWith("VALIDATION_ERROR")) {
      return res.status(400).json({ error: error.message.split(": ")[1] });
    }
    if (error.message.startsWith("NOT_FOUND")) {
      return res.status(404).json({ error: error.message.split(": ")[1] });
    }
    console.error("Error saat memperbarui toko:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function deleteTokoController(req, res) {
  try {
    const { toko_id } = req.params;
    await deleteToko(toko_id);
    return res.status(200).json({
      message: "Toko berhasil dihapus",
    });
  } catch (error) {
    if (error.message.startsWith("NOT_FOUND")) {
      return res.status(404).json({ error: error.message.split(": ")[1] });
    }
    console.error("Error saat menghapus toko:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

async function editTokoController(req, res) {
  try {
    const { toko_id } = req.params;
    const toko = await editToko(toko_id);
    return res.status(200).json({
      message: "Data toko berhasil didapatkan",
      data: toko,
    });
  } catch (error) {
    if (error.message.startsWith("NOT_FOUND")) {
      return res.status(404).json({ error: error.message.split(": ")[1] });
    }
    console.error("Error saat mengambil data toko:", error);
    return res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
}

module.exports = {
  getAllTokoController,
  getAllTokosController,
  createTokoController,
  updateTokoController,
  deleteTokoController,
  editTokoController,
};
