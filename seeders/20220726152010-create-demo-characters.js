'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Characters', [{
      name: 'Mickey Mouse',
      age: 94,
      image:'https://static.wikia.nocookie.net/disney/images/d/d8/MickeyMouse.png/revision/latest/scale-to-width-down/350?cb=20140304090828&path-prefix=es',
      weight:10,
      history:'Esta es la historia de Mickey Mouse!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pato Donald',
      age: 88,
      image:'https://static.wikia.nocookie.net/disney/images/6/6f/Donald_Duck.png/revision/latest/scale-to-width-down/350?cb=20140427112158&path-prefix=es',
      weight:15,
      history:'Esta es la historia del Pato Donald!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Goofy',
      age: 90,
      image:'https://static.wikia.nocookie.net/disney/images/e/e5/Goofy.png/revision/latest/scale-to-width-down/350?cb=20140306174418&path-prefix=es',
      weight:25,
      history:'Esta es la historia de Goofy!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Characters', null, {});
  }
};
