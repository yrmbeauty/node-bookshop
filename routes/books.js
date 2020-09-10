const controller = require("../controllers/book");
const isAuthorized = require("../middlewares/isAuthorized");

module.exports = (router) => {
  router.get("/", controller.getBooks);
  router.get("/:bookId", controller.getBook);

  router.get("/collection", isAuthorized, controller.getBooks);

  router.post(
    "/createBook",
    isAuthorized,
    controller.upload,
    controller.createBook
  );
};
