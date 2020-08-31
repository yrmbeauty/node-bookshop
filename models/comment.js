module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    text: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    book_id: {
      type: Sequelize.INTEGER,
    },
    book_rate: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  });
  return Comment;
};
