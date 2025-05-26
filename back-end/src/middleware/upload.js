const path = require("path");
const fs = require("fs");

// Buat path absolut ke /public/uploads
const uploadDir = path.join(__dirname, "..", "..", "public", "uploads");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

module.exports = upload;
