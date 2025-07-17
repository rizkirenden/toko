const jwt = require("jsonwebtoken");
const { loginUser } = require("../service/authService");

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

async function loginController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email dan password wajib diisi" });
    }

    const user = await loginUser(email, password);

    if (!user) {
      return res.status(401).json({ error: "Email atau password salah" });
    }

    // Normalize roles - treat both "pemilik" and "toko" as "toko" for consistency
    const normalizedRole = user.toko_id ? "toko" : "admin";
    const originalRole = user.role || normalizedRole;

    const payload = {
      user_id: user.user_id,
      email: user.email,
      username: user.username,
      toko_id: user.toko_id,
      role: normalizedRole, // Always use normalized role in token
      originalRole, // Include original role for reference if needed
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1D" });

    // Prepare response data
    const responseData = {
      message: "Login berhasil",
      token,
      user: {
        user_id: user.user_id,
        email: user.email,
        username: user.username,
        role: originalRole, // Return original role to frontend
      },
    };

    // Include toko data if available
    if (user.toko_id) {
      responseData.toko = {
        toko_id: user.toko_id,
        nama_toko: user.nama_toko,
        no_telp: user.no_telp,
        alamat: user.alamat,
      };
    }

    return res.json(responseData);
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Terjadi kesalahan server" });
  }
}

module.exports = { loginController };
