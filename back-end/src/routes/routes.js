const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  getAllUserController,
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
  editCategoryController,
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
router.get("/users", getAllUserController);
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
router.get("/categories/:category_id", editCategoryController);

// Toko
router.get("/tokos", getAllTokoController);
router.post("/tokos", createTokoController);
router.put("/tokos/:toko_id", updateTokoController);
router.delete("/tokos/:toko_id", deleteTokoController);
router.get("/tokos/:toko_id", editTokoController);

// Product (Produk)
router.get("/products", getAllProductController);
// Upload dengan multiple fields
router.post(
  "/products",
  upload.fields([
    { name: "gambar", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  createProductController
);

router.put(
  "/products/:product_id",
  upload.fields([
    { name: "gambar", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  updateProductController
);

router.delete("/products/:product_id", deleteProductController);
router.get("/products/:product_id", editProductController);

module.exports = router;
