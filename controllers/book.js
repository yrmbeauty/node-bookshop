const db = require('../db/models');

const getBook = (req, res) => {
  try {
    const { id: bookId } = req.params;
    const book = await db.book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({ message: `Book with Id ` })
    }
    return res.json({ book })
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

const getBook = (req, res) => {
  try {
    const { id: bookId } = req.params;
    const book = await db.book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({ message: `Book with Id ` })
    }
    return res.json({ book })
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getBook,
  getBooks
}