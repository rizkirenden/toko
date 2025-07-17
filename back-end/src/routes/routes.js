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
  getAllCategoryParamsController,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
  editCategoryController,
} = require("../controller/categoryController");

const {
  getAllTokoController,
  getAllTokosController,
  createTokoController,
  updateTokoController,
  deleteTokoController,
  editTokoController,
} = require("../controller/tokoController");

const {
  getAllProductController,
  getAllProductParamsController,
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
router.get("/categories/data", getAllCategoryParamsController);
router.post("/categories", createCategoryController);
router.put("/categories/:category_id", updateCategoryController);
router.delete("/categories/:category_id", deleteCategoryController);
router.get("/categories/:category_id", editCategoryController);

// Toko
router.get("/tokos", getAllTokoController);
router.get("/tokos/all", getAllTokosController);
router.post(
  "/tokos",
  upload.fields([{ name: "toko_logo", maxCount: 1 }]),
  createTokoController
);
router.put(
  "/tokos/:toko_id",
  upload.fields([{ name: "toko_logo", maxCount: 1 }]),
  updateTokoController
);
router.delete("/tokos/:toko_id", deleteTokoController);
router.get("/tokos/:toko_id", editTokoController);

// Product (Produk)
getAllProductParamsController
} = require("../controllers/productController");

// Protected routes
router.get("/products/data", 
  authMiddleware, 
  (req, res, next) => {
    console.log("User accessing endpoint:", req.user);
    next();
  },
  getAllProductParamsController
);
router.post(
  "/products",
  upload.fields([
    { name: "gambar_product", maxCount: 1 },
    { name: "video_product", maxCount: 1 },
  ]),
  createProductController
);

router.put(
  "/products/:product_id",
  upload.fields([
    { name: "gambar_product", maxCount: 1 },
    { name: "video_product", maxCount: 1 },
  ]),
  updateProductController
);

router.delete("/products/:product_id", deleteProductController);
router.get("/products/:product_id", editProductController);

module.exports = router;
