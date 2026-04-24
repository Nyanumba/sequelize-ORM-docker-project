'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('OrderProducts', [
      {
        orderId: 1,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderId: 1,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('OrderProducts', null, {});
  }
};
