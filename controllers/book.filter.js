const db = require('../models');
const { Op } = db.Sequelize;
const DEFAULT_LIMIT = 10;
const DEFAULT_PAGE = 1;

const bookFilter = (params) => {
  const { limit, page, author, category, price, userId } = params;
  const filter = {
    where: {},
    include: [],
  };

  if (parseInt(limit) !== 0) {
    filter.limit = DEFAULT_LIMIT;
  } else {
    filter.limit = parseInt(limit);
  }

  if (page) {
    filter.offset = filter.limit * (parseInt(page) - 1);
  } else {
    filter.offset = filter.limit * (DEFAULT_PAGE - 1);
  }

  if (price) {
    // add between
    filter.where.price = {
      [Op.between]: [parseInt(price[0]), parseInt(price[1])],
    };
  }

  if (category) {
    filter.where.categoryId = parseInt(category);
    filter.include.push({
      model: db.category,
    });
  }

  if (author) {
    filter.where.authorId = parseInt(author);
    filter.include.push({
      model: db.author,
    });
  }

  if (userId) {
    filter.where.userId = parseInt(userId);
  }
  return filter;
};

module.exports = {
  bookFilter,
};
