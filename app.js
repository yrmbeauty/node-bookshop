const books = require('./books.json')

const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const Sequelize = require("sequelize");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "bookshop",
  password: "root"
});

connection.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  }
  else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

const sequelize = new Sequelize("bookshop", "root", "root", {
  dialect: "mysql",
  host: "localhost"
});

const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * from books'

app.use(cors())

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.send('go to /books to get books')
});

app.get("/books", function (request, response) {
  connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
    if (err) {
      response.send(err)
    } else {
      return response.json({
        data: results
      })
    }
  })
});

app.get(`/book/id:bookId`, function (request, response) {
  let book = books.find(book => book.id === request.params.bookId)
  return response.json({
    book
  })
});

module.exports = app;