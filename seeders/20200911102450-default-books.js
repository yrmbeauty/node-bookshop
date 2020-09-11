'use strict';
const faker = require('faker');
const DEFAULT_PHOTO = 'DEFAULT_PHOTO.jpg';
const authors = [1, 2, 3, 4];
const categories = [1, 2, 3, 4];
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
    return queryInterface.bulkInsert('books', [
      {
        name: faker.random.words(2),
        authorId: authors[0],
        categoryId: categories[0],
        description: faker.lorem.text(200),
        example_text: faker.lorem.text(200),
        price: faker.random.number(200),
        photo: DEFAULT_PHOTO,
        rating: faker.random.number(10),
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(2),
        authorId: authors[1],
        categoryId: categories[1],
        description: faker.lorem.text(200),
        example_text: faker.lorem.text(200),
        price: faker.random.number(200),
        photo: DEFAULT_PHOTO,
        rating: faker.random.number(10),
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(2),
        authorId: authors[2],
        categoryId: categories[2],
        description: faker.lorem.text(200),
        example_text: faker.lorem.text(200),
        price: faker.random.number(200),
        photo: DEFAULT_PHOTO,
        rating: faker.random.number(10),
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(2),
        authorId: authors[3],
        categoryId: categories[3],
        description: faker.lorem.text(200),
        example_text: faker.lorem.text(200),
        price: faker.random.number(200),
        photo: DEFAULT_PHOTO,
        rating: faker.random.number(10),
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
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
    return queryInterface.bulkDelete('books', null, {});
  },
};
