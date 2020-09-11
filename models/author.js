module.exports = (sequelize, Sequelize) => {
  const Author = sequelize.define('author', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
    updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  });

  Author.associate = (models) => {
    models.author.hasMany(models.book);
  };

  return Author;
};
