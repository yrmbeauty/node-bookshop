const BCRYPT = require("bcrypt");
const { validationResult } = require("express-validator");
const JWT = require("jsonwebtoken");
const CONFIG = require("../config/default.json");

const db = require("../models");

const registration = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Некорректные данные при регистрации",
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    const candidate = await db.user.findOne({ where: { email } });

    if (candidate) {
      return res
        .status(400)
        .json({ message: "Такой пользователь уже существует" });
    }

    const hashedPassword = await BCRYPT.hash(password, 12);

    const user = await db.user.create({ email, password: hashedPassword });

    return res.status(201).json({ message: `Пользователь ${email} создан` });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
// LOGIN-------------------------------------------------->
const login = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Некорректные данные при входе в систему",
      });
    }

    const { email, password } = req.body;

    const user = await db.user.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({
        message: "Пользователь не найден",
      });
    }

    const isMatch = await BCRYPT.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Неверный пароль, попробуйет снова",
      });
    }

    const token = JWT.sign(
      { userId: user.id, email: email },
      CONFIG.jwtSecret,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      token,
      userId: user.id,
      email: email,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  registration,
  login,
};
