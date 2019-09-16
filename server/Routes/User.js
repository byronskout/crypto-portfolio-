const express = require("express");
const router = express.Router();
const userController = require("../Controllers/User");

router.post("/", userController.createUser);

module.exports = router;
