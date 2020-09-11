'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert('authors', [
      {
        id: 1,
        name: 'Хантер С. Томпсон',
      },
      {
        id: 2,
        name: 'Говард Ф. Лавкрафта',
      },
      {
        id: 3,
        name: 'Андрей В. Курпатов',
      },
      {
        id: 4,
        name: 'Джоан К. Роулинг',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('authors', null, {});
  },
};
