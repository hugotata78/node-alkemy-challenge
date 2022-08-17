'use strict';
require('dotenv').config()
const bcrypt = require('bcryptjs')
const password = process.env.USER_PASSWORD
const email = process.env.ADMIN_EMAIL

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'adminuser',
      email: email,
      password: bcrypt.hashSync(password, 10),
  },
  {
    name: 'regularuser',
    email: 'regularuser@mail.com',
    password: bcrypt.hashSync(password, 10),
}
], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
