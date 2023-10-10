module.exports = {
  getAllUsersSql: "SELECT * FROM users",
  getAllBooksSql: "SELECT * FROM books",
  checkUserEmailSql: "SELECT * FROM users WHERE Email = ?",
  insertUserSql:
    "INSERT INTO users(FirstName, LastName, Email, `Password`) VALUES (?, ?, ?, ?)",
  updateLogoutStatusSql: "UPDATE users SET IsLoggedIn = false WHERE Email = ?",
  updateLoginStatusSql: "Update users Set IsLoggedIn = true WHERE UserID = ?",
};
