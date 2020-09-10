const db = require("../models");
const multer = require("multer");
const { bookFilter: makeFilter, getMyColletcion } = require("./book.filter");
// const books = require("../books.json");

const getBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    // const book = books.find((book) => book.id == bookId);
    const book = await db.book.findOne(bookId);
    if (!book) {
      return res.status(404).json({ message: `Book with ${bookId} not found` });
    }

    return res.json({ book });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getBooks = async (req, res, next) => {
  try {
    const filteredBooks = {};

    if (req.user) {
      filteredBooks = getMyColletcion();
    } else {
      filteredBooks = makeFilter(req.query);
    }

    if (!filteredBooks) {
      return res.status(404).json({ message: "Books not found" });
    }
    return res.json({ filteredBooks });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createBook = async (req, res) => {
  try {
    const {
      body: { author, price, name, category, description, example_text },
      file: { originalname, mimetype },
      user,
    } = req;

    const candidate = await db.book.findOne({
      where: { name, author, userId: user.id },
    });
    if (candidate)
      return res.status(400).json({ message: "Такую книгу вы уже добавляли" });
    const resBook = await db.book.create({
      userId: user.id,
      photo: originalname,
      author,
      price,
      name,
      category,
      description,
      example_text,
    });
    return res.status(200).json(`Книга создана- ${resBook instanceof db.book}`);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const multerConf = {
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/uploads");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        req.body.name +
          file.originalname.slice(file.originalname.lastIndexOf("."))
      );
    },
  }),
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
};

const upload = multer({
  storage: multerConf.storage,
  fileFilter: multerConf.fileFilter,
}).single("photo");

module.exports = {
  getBook,
  getBooks,
  createBook,
  upload,
};
