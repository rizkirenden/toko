const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Token tidak ditemukan atau format salah",
      solution: "Gunakan format: Bearer <token>",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // Validate token structure
    if (!decoded.user_id || !decoded.role) {
      return res.status(403).json({
        error: "Token tidak valid",
        solution: "Token harus mengandung user_id dan role",
      });
    }

    // For toko users, ensure toko_id exists
    if (
      (decoded.role === "toko" || decoded.role === "pemilik") &&
      !decoded.toko_id
    ) {
      return res.status(403).json({
        error: "Token toko tidak valid",
        solution: "Token toko harus mengandung toko_id",
      });
    }

    req.user = {
      user_id: decoded.user_id,
      email: decoded.email,
      role: decoded.role,
      toko_id: decoded.toko_id,
      originalRole: decoded.originalRole || decoded.role,
    };

    next();
  } catch (err) {
    console.error("JWT Verification Error:", err.message);
    return res.status(403).json({
      error: "Token tidak valid atau kedaluwarsa",
      solution: "Login ulang untuk mendapatkan token baru",
    });
  }
}

module.exports = authMiddleware;
