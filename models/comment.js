module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    added_by: {
      type: Sequelize.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
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
