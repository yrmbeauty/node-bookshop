module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define(
    'book',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
}
