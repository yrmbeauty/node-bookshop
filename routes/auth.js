const controller = require('../controllers/auth');

module.exports = (router) => {
  router.post('/auth/register', controller.register);

  router.post('/auth/login', controller.login);
};