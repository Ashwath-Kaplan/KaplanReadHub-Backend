const { getAllBooks } = require("../models/book-query");

const getAllBooksService = async () => {
  try {
    const books = await getAllBooks();
    return { books: books };
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllBooksService };
