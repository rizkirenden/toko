const express = require("express");
const router = express.Router();
const { loginController } = require("../controller/registerController");

router.post("/register", loginController);

module.exports = router;
