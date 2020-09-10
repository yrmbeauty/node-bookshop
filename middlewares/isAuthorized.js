const jwt = require("jsonwebtoken");
const db = require("../models/index");
const CONFIG = require("../config/default.json");

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({
        errors: [
          {
            msg: "Authorization header is empty!",
          },
        ],
      });
    }

    const token = req.headers.authorization.split("Bearer ")[1];
    const decoded = jwt.verify(token, CONFIG.jwtSecret);

    const user = await db.user.findOne({ where: { id: decoded.id } });
    if (!user) {
      return res.status(401).json({
        errors: [
          {
            msg: "Token is broken",
          },
        ],
      });
    }
    // if (user.status !== "active") {
    //   return res.status(403).json({
    //     errors: [
    //       {
    //         msg: "You have no permission to get this",
    //       },
    //     ],
    //   });
    // }
    req.user = user.toJSON();
    next();
  } catch (err) {
    return res.status(401).json({
      errors: [
        {
          msg: err.message,
        },
      ],
    });
  }
};
