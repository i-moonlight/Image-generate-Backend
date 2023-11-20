const express = require("express");
const router = express.Router();
const userController = require("../controllers/openai/index");

router.post("/imagetotext", userController.index);

module.exports = router;
