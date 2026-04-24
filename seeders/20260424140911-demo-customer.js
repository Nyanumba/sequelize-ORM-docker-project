'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Customers',[
    {
      name: 'Anthony Nyasente',
      email: 'anthonynyasente@gmail.com',
      phone_number: '0712345678',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Customers', null, {});
  },
};
