'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('gender_movie', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "movies",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: 'CASCADE'
      },
      gender_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "genders",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('gender_movie');
    
  }
};
