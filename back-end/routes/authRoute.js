const express = require("express");
const router = express.Router();
const { loginController } = require("../controller/authController");

router.post("/login", loginController);

module.exports = router;
