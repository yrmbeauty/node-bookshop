const db = require('../models');

const books = require('../books.json')

const getBook = (req, res) => {
  try {
    const { bookId } = req.params;
    book = books.find((book) => book.id == bookId)
    // const book = await db.book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({ message: `Book with ${bookId} not found` })
    }
    return res.json({ book })
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

const getBooks = (req, res) => {
  try {
    const { id: bookId } = req.params;
    // const books = await db.book.findByPk(bookId);
    if (!books) {
      return res.status(404).json({ message: `Books not found` })
    }
    return res.json({ books })
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getBook,
  getBooks
}