const { getAllBooksService } = require("../services/book-service");

const getBooks = async (req, res) => {
  try {
    const result = await getAllBooksService();
    res.status(200).json({ success: result.success, books: result.books });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getBooks };
