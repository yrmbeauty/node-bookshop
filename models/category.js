module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    value: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  });

  Category.associate = (models) => {
    models.category.hasMany(models.book);
  };

  return Category;
};
