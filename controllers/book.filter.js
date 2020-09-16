const db = require('../models');
const { Op } = db.Sequelize;
const DEFAULT_LIMIT = 10;
const DEFAULT_PAGE = 1;

const converQueryToArray = (str) => {
  let result;

  const useFor = (myCase) => {
    const arr = [];
    for (let i = 0; i < myCase; i = i + 2) {
      arr.push(parseInt(str[i]));
    }
    return arr;
  };
  switch (str.length) {
    case 7:
      result = useFor(7);
      break;
    case 5:
      result = useFor(5);
      break;
    case 3:
      result = useFor(3);
      break;
    case 1:
      result = useFor(1);
      break;

    default:
      break;
  }

  return result;
};

const makeFilter = (params) => {
  const { limit, page, authors, categories, price, userId } = params;
  const filter = {
    where: {},
    include: [],
  };
  filter.include.push(
    {
      model: db.category,
    },
    {
      model: db.author,
    }
  );

  if (parseInt(limit) !== 0) {
    filter.limit = DEFAULT_LIMIT;
  } else {
    filter.limit = parseInt(limit);
  }

  filter.offset = filter.limit * ([page ? parseInt(page) : DEFAULT_PAGE] - 1);

  if (price) {
    filter.where.price = {
      [Op.between]: [parseInt(price[0]), parseInt(price[1])],
    };
  }

  if (categories) {
    filter.where.categoryId = converQueryToArray(categories);
  }

  if (authors) {
    filter.where.authorId = converQueryToArray(authors);
  }

  if (userId) {
    filter.where.userId = parseInt(userId);
  }
  return filter;
};

module.exports = {
  makeFilter,
};
