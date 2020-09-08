const db = require("../models");
const multer = require("multer");

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

const getBooks = (req, res, next) => {
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
    const {
      body: { added_by, form },
      file: { originalname, mimetype },
    } = req;
    const {
      author,
      price,
      name,
      category,
      description,
      example_text,
    } = JSON.parse(form);
    // db.book.sync().then(() => {
    //   // Now the `users` table in the database corresponds to the model definition
    //   console.log("asd");
    // });
    const candidate = await db.book.findOne({
      where: { name, author, userId: added_by },
    });
    if (candidate)
      return res.status(400).json({ message: "Такую книгу вы уже добавляли" });
    const resBook = await db.book.create({
      userId: added_by,
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
    console.log(err);
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
