const express = require("express");
const router = express.Router();
const {
  registerUserController,
  updateUserController,
  deleteUserController,
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
} = require("../controller/categoryController.js");
const { createTokoController } = require("../controller/tokoController");

router.post("/login", loginController);

router.post("/register", registerUserController);
router.put("/users/:id", updateUserController);
router.delete("/users/:id", deleteUserController);
router.get("/verify-email", verifyEmailController);

router.get("/category", getAllCategoryController);
router.post("/create-category", createCategoryController);
router.put("/category/:category_id", updateCategoryController);
router.delete("/category/:category_id", deleteCategoryController);

router.post("/create-toko", createTokoController);

module.exports = router;
