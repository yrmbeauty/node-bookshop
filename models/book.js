module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    // added_by: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "User",
    //     key: "id",
    //   },
    // },
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
    author: {
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

  return Book;
};
