module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
    login: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    downloaded_books: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
    books_rating: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
  });

  User.associate = (models) => {
    models.user.hasMany(models.comment);
    models.user.hasMany(models.book);
  };

  return User;
};
