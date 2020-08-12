const validators = require("../validators");
const controller = require("../controllers/auth");

module.exports = (router) => {
  router.post("/registration", validators("auth.registration"), controller.registration);

  router.post("/login", validators("auth.login"), controller.login);
};