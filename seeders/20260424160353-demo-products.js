'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Products', [
      {
        name: 'Macbook Laptop',
        serial_number: '1111',
        price: 122800,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'IPhone',
        serial_number: '2222',
        price: 55500,
        createdAt: new Date(),
        updatedAt: new Date()
      }
   ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
