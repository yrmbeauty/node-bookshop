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
    return queryInterface.bulkInsert('categories', [
      {
        id: 1,
        value: 'Sci-Fi and Fantasy',
      },
      {
        id: 2,
        value: 'Mystery and Suspense',
      },
      {
        id: 3,
        value: 'Literature and Fiction',
      },
      {
        id: 4,
        value: 'Novel',
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
    return queryInterface.bulkDelete('categories', null, {});
  },
};
