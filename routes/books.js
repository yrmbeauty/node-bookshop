const books = require('../books.json')

module.exports = (router) => {
  router.get("/", function (request, response) {
    return response.json({ books });

    // connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
    //   if (err) {
    //     response.send(err)
    //   } else {
    //     return response.json({
    //       data: results
    //     })
    //   }
    // })
  });
};