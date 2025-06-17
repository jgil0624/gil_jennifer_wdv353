const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//Route to create a new user
router.post("/", userController.createUser);
router.get("/", userController.getUsers);

module.exports = router;
// This code defines routes for user-related operations in Node.js using Express.
