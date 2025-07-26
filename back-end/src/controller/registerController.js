const {
  getAllUser,
  registerUser,
  updateUser,
  deleteUser,
  editUser,
} = require("../service/registerService");

async function getAllUserController(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";

    const userData = await getAllUser({ page, limit, search });

    const usersWithoutPasswords = userData.data.map(
      ({ password, ...rest }) => rest
    );

    res.status(200).json({
      message: "Data semua user berhasil didapatkan",
      data: usersWithoutPasswords,
      total: userData.total,
    });
  } catch (error) {
    console.error("Error getAllUserController:", error);
    res.status(500).json({ error: "Gagal mengambil data user" });
  }
}

async function registerUserController(req, res) {
  try {
    const userData = req.body;
    console.log("Data diterima:", userData); // log debug

    const userId = await registerUser(userData);

    res.status(201).json({
      message: "User berhasil didaftarkan",
      user_id: userId,
    });
  } catch (error) {
    console.error("Register Error:", error.message);
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

async function editUserController(req, res) {
  try {
    const user_id = req.params.user_id;
    const user = await editUser(user_id);

    delete user.password;

    res.status(200).json({
      message: "Data user berhasil didapatkan",
      data: user,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
module.exports = {
  getAllUserController,
  registerUserController,
  updateUserController,
  deleteUserController,
  editUserController,
};
