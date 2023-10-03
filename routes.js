const express = require("express");
const connection = require("./database");
const router = express.Router();

router.get("/getusers", (req, res) => {
  const sql = "SELECT * FROM users";
  connection.query(sql, (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error fetching data." });
    } else {
      res.status(200).json(results);
    }
  });
});

router.post("/adduser", (req, res) => {
  const user = {
    FirstName: req.body.firstName,
    LastName: req.body.lastName,
    Email: req.body.email,
    Password: req.body.password,
  };

  const emailCheckSql = "SELECT * FROM users WHERE Email = ?";
  connection.query(emailCheckSql, [user.Email], (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error checking email availability." });
    } else if (results.length > 0) {
      res.status(400).json({ message: "Email is already taken." });
    } else {
      const insertUserSql =
        "INSERT INTO users(FirstName,LastName,Email,`Password`) values (?,?,?,?)";
      connection.query(
        insertUserSql,
        [user.FirstName, user.LastName, user.Email, user.Password],
        (error, results) => {
          if (error) {
            res.status(500).json({ message: "Error adding user." });
          } else {
            res.status(201).json({ message: "User added successfully!" });
          }
        }
      );
    }
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const loginSql = "SELECT * FROM users WHERE Email = ? AND Password = ?";
  connection.query(loginSql, [email, password], (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error checking user credentials." });
    } else if (results.length === 1) {
      res.status(200).json({ message: "Login successful." });
    } else {
      res
        .status(401)
        .json({ message: "Login failed. Invalid email or password." });
    }
  });
});

module.exports = router;
