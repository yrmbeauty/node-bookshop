module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    photo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    example_text: {
      type: Sequelize.TEXT,
      allowNull: true,
      defaultValue: "",
    },
    rating: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  });

  Book.associate = (models) => {
    models.book.hasMany(models.comment);
    models.book.belongsTo(models.author);
    models.book.belongsTo(models.category);
    models.book.belongsTo(models.user);
  };

  return Book;
};
