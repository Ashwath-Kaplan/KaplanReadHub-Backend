const { pool } = require("../database");
const { selectAllBooksSql } = require("./sql-query");

const getAllBooks = async () => {
  try {
    // Fetch all the books from the database
    const [rows] = await pool.query(selectAllBooksSql);
    return rows;
  } catch (error) {
    throw new Error("Error fetching books data !");
  }
};

module.exports = { getAllBooks };
