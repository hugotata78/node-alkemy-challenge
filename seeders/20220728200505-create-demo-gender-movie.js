'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('gender_movie', [{
      movie_id: 1,
      gender_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 1,
      gender_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 1,
      gender_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 2,
      gender_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 2,
      gender_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 2,
      gender_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 3,
      gender_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 3,
      gender_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      movie_id: 3,
      gender_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('gender_movie', null, {});
  }
};
