'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('character_movie', [{
      movie_id: 1,
      character_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 1,
      character_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 1,
      character_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 2,
      character_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 2,
      character_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 2,
      character_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 3,
      character_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 3,
      character_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 3,
      character_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('character_movie', null, {});
  }
};
