const db = require("../models");

const books = require("../books.json");

const getBook = (req, res) => {
  try {
    const { bookId } = req.params;
    const book = books.find((book) => book.id == bookId);
    // const book = await db.book.findOne(bookId);
    if (!book) {
      return res.status(404).json({ message: `Book with ${bookId} not found` });
    }
    return res.json({ book });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getBooks = (req, res) => {
  try {
    const { all, category, author, price } = req.params;
    // const books = await db.book.findOne(bookId);
    if (!books) {
      return res.status(404).json({ message: "Books not found" });
    }
    return res.json({ books });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createBook = async (req, res) => {
  try {
    const { book } = req.params;
    const resBook = await db.book.create(book);

    return res.status(200).json(resBook instanceof db.book);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getBook,
  getBooks,
  createBook,
};
