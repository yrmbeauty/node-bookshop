const controller = require("../controllers/book");

module.exports = (router) => {
  router.get("/", controller.getBooks);
};