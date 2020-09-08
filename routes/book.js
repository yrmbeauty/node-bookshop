const controller = require("../controllers/book");

module.exports = (router) => {
  router.get("/:bookId", controller.getBook);

  router.post("/createBook", controller.upload, controller.createBook);
};
