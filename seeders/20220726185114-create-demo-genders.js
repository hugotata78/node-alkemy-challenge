'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Genders', [{
      name: 'action',
      image: 'https://st.depositphotos.com/1671550/4216/v/600/depositphotos_42169715-stock-illustration-taekwondo-martial-art.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'comedy',
      image: 'https://cdn.pixabay.com/photo/2013/07/13/10/45/comedy-157719__340.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'romance',
      image: 'https://cdn.pixabay.com/photo/2014/12/08/11/49/couple-560783__340.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genders', null, {});

  }
};
