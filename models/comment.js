module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    text: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    book_rate: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  });

  Comment.associate = (models) => {
    models.comment.belongsTo(models.user);
    models.comment.belongsTo(models.book);
  };

  return Comment;
};
