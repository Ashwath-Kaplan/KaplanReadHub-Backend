const { getBooks } = require("../models/book-query");

const getBooksService = async (offset, pageSize) => {
  try {
    const books = await getBooks(offset, pageSize);
    return { books: books };
  } catch (error) {
    throw error;
  }
};

module.exports = { getBooksService };
