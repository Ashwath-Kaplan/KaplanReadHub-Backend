const express = require("express");
const router = express.Router();
const {
  addUser,
  login,
  logout,
  getUser,
} = require("../controllers/user-controller");
const { tokenVerification } = require("../middlewares/token-verification");

router.post("/adduser", addUser);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getuser", tokenVerification, getUser);

module.exports = router;
