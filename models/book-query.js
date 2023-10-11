const { pool } = require("../database");
const { selectBooksSql } = require("./sql-query");

const getBooks = async (offset, pageSize) => {
  try {
    // Fetch all the books from the database
    const [rows] = await pool.query(selectBooksSql, [offset, pageSize]);
    return rows;
  } catch (error) {
    throw new Error("Error fetching books data !");
  }
};

module.exports = { getBooks };
