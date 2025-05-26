const express = require("express");
const router = express.Router();

const {
  registerUserController,
  updateUserController,
  deleteUserController,
  editUserController,
} = require("../controller/registerController");

const {
  verifyEmailController,
} = require("../controller/verifyEmailController");
const { loginController } = require("../controller/authController");

const {
  getAllCategoryController,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
} = require("../controller/categoryController");

const {
  getAllTokoController,
  createTokoController,
  updateTokoController,
  deleteTokoController,
  editTokoController,
} = require("../controller/tokoController");

const {
  getAllProductController,
  createProductController,
  updateProductController,
  deleteProductController,
  editProductController,
} = require("../controller/productController");

// Auth
router.post("/login", loginController);
router.post("/register", registerUserController);
router.put("/users/:user_id", updateUserController);
router.delete("/users/:user_id", deleteUserController);
router.get("/users/:user_id", editUserController);
router.get("/verify-email", verifyEmailController);

// Category (Kategori)
router.get("/categories", getAllCategoryController);
router.post("/categories", createCategoryController);
router.put("/categories/:category_id", updateCategoryController);
router.delete("/categories/:category_id", deleteCategoryController);

// Toko
router.get("/tokos", getAllTokoController);
router.post("/tokos", createTokoController);
router.put("/tokos/:toko_id", updateTokoController);
router.delete("/tokos/:toko_id", deleteTokoController);
router.get("/tokos/:toko_id", editTokoController);

// Product (Produk)
router.get("/products", getAllProductController);
router.post("/products", createProductController);
router.put("/products/:product_id", updateProductController);
router.delete("/products/:product_id", deleteProductController);
router.get("/products/:product_id", editProductController);

module.exports = router;
