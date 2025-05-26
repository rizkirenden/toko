const {
  registerUser,
  updateUser,
  deleteUser,
} = require("../service/registerService");

async function registerUserController(req, res) {
  try {
    const userData = req.body;
    const userId = await registerUser(userData);

    res.status(201).json({
      message: "User berhasil didaftarkan",
      user_id: userId,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateUserController(req, res) {
  try {
    const user_id = req.params.id;
    const updatedData = req.body;

    await updateUser(user_id, updatedData);

    res.json({ message: "User berhasil diperbarui" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteUserController(req, res) {
  try {
    const user_id = req.params.id;
    await deleteUser(user_id);

    res.json({ message: "User berhasil dihapus" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  registerUserController,
  updateUserController,
  deleteUserController,
};
