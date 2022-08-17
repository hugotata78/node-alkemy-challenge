'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [{
      title: 'Los Tres Mosqueteros',
      image: 'https://scontent.fsra4-1.fna.fbcdn.net/v/t31.18172-8/13738170_1067631666652953_5034796494994020967_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=2c4854&_nc_ohc=gnWSswYpdYIAX_a2-5M&_nc_ht=scontent.fsra4-1.fna&oh=00_AT8nMjy1yayRhjFnZVYGb9DfKnnbvMYkvSR3rk_JjRDZTQ&oe=63044D01',
      creationDate:new Date('2004-08-07'),
      qualification:4.7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Mickey Mouse y los Superpilotos',
      image: 'https://pics.filmaffinity.com/mickey_and_the_roadster_racers-678211251-mmed.jpg',
      creationDate: new Date('2017-01-15') ,
      qualification:4.8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'El Pato Donald: Lo mejor de Donald',
      image: 'https://pics.filmaffinity.com/donald_s_better_self-373162950-mmed.jpg',
      creationDate: new Date('1938-11-03'),
      qualification:5.0,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
