const books = require('./books.json')

const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.send('go to /books to get books')
});

app.get("/books", function (request, response) {
  return response.json({
    books
  })
});

app.get(`/book/id:bookId`, function (request, response) {
  let book = books.find(book => `${book.id}` === `${request.params.bookId}`)
  return response.json({
    book
  })
});

module.exports = app;