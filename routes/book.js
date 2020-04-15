const books = require('../books.json');

module.exports = (router) => {
  router.get(`/:bookId`, function (request, response) {
    let book = books.find(book => `${book.id}` === `${request.params.bookId}`)

    return response.json({ book })
  });
}