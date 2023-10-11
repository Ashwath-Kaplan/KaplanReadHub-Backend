const { getBooksService } = require("../services/book-service");

const getBooks = async (req, res) => {
  try {
    const pageIndex = parseInt(req.query.pageIndex) || 0;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const offset = pageIndex * pageSize;

    const result = await getBooksService(offset, pageSize);
    res.status(200).json({ success: result.success, books: result.books });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getBooks };
