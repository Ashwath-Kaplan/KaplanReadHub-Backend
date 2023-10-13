const { pool } = require("../database");
const {
  insertUserSql,
  selectUserByEmailSql,
  updateLogoutStatusSql,
  updateLoginStatusSql,
} = require("./sql-query");

const addNewUser = async (userDetails) => {
  const { firstName, lastName, email, password } = userDetails;
  try {
    // Insert new user to the database
    await pool.query(insertUserSql, [firstName, lastName, email, password]);
    return;
  } catch (error) {
    throw new Error("Error adding new user !");
  }
};

const selectUserByEmail = async (email) => {
  try {
    // Fetch the rows with the same email
    const [rows] = await pool.query(selectUserByEmailSql, email);
    return rows;
  } catch (error) {
    throw new Error("Error fetchng user !");
  }
};

const logoutUser = async (email) => {
  try {
    // Set the IsLoggedIn flag as false in database
    await pool.query(updateLogoutStatusSql, email);
    return;
  } catch (error) {
    throw new Error("Error logging out the user !");
  }
};

const loginUser = async (userId) => {
  try {
    // Set the IsLoggedIn flag as true in database
    await pool.query(updateLoginStatusSql, userId);
    return;
  } catch (error) {
    throw new Error("Error logging in the user !");
  }
};

module.exports = { addNewUser, selectUserByEmail, logoutUser, loginUser };
