const express = require("express");
const router = express.Router();
const { registerUserController } = require("../controller/registerController");
const {
  verifyEmailController,
} = require("../controller/verifyEmailController");
const { loginController } = require("../controller/authController");
const {
  createCategoryController,
} = require("../controller/categoryController");
const authMiddleware = require("../middleware/authMiddleware");
const { createTokoController } = require("../controller/tokoController");

router.post("/register", registerUserController);
router.get("/verify-email", verifyEmailController);
router.post("/login", loginController);
router.post("/create-category", createCategoryController);
router.post("/create-toko", createTokoController);

module.exports = router;
