const express = require("express");
const router = express.Router();
const { addUser, login, logout } = require("../controllers/user-controller");

router.post("/adduser", addUser);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
