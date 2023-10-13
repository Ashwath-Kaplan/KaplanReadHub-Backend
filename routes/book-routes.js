const express = require("express");
const router = express.Router();
const { getBooks } = require("../controllers/book-controller");
const { tokenVerification } = require("../middlewares/token-verification");

router.get("/getbooks", tokenVerification, getBooks);

module.exports = router;
