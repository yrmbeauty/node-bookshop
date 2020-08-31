const { check } = require("express-validator");

module.exports = {
  registration: [
    check("email", "Почта отсутсвует").normalizeEmail().exists(),
    check("email", "Почта введена некорректно").normalizeEmail().isEmail(),
    check("password", "Пароль отсутсвует").exists(),
    check("password", "Пароль должен содержать минимум 6 символов").isLength({ min: 6 })
  ],
  login: [
    check("password", "Пароль отсутсвует").exists(),
    check("email", "Почта отсутсвует").normalizeEmail().exists(),
    check("email", "Почта введена некорректно").normalizeEmail().isEmail(),
  ]
};