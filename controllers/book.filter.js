const db = require("../models");
const { Op } = db.Sequelize;
const DEFAULT_LIMIT = 10;
// const DEFAULT_PAGE = 1;

const bookFilter = (params) => {
  const { limit, page, author, category, price } = params;
  const whereObj = {};
  const confObj = {};
  const include = [];

  if (parseInt(limit) !== 0) {
    confObj.limit = DEFAULT_LIMIT;
    return db.book.findAll();
  } else {
    confObj.limit = parseInt(limit);
  }
  if (page) {
    confObj.page = parseInt(page);
  }
  if (price) {
    whereObj.price = { [Op.in]: [parseInt(price[0]), parseInt(price[1])] };
    include.push({
      model: db.price,
    });
  }
  if (category) {
    whereObj.categoryId = parseInt(category);
    include.push({
      model: db.category,
    });
  }

  if (author) {
    whereObj.authorId = parseInt(author);
    include.push({
      model: db.author,
    });
  }
  console.log("whereObj>>", whereObj, "confObj>>", confObj);
  return db.book.findAndCountAll({
    where: whereObj,
    offset: confObj.page,
    limit: confObj.limit,
  });
};

const getMyColletcion = () => {
  const { user } = req;

  return db.book.findAll({
    where: { userId: `${user.id}` },
  });
};

module.exports = {
  bookFilter,
  getMyColletcion,
};
