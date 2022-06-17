"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "gdo",
      [
        {
          gdo:"gdo"
        },
        {
          gdo:"gdo1"
        },
        {
          gdo:"gdo2"
        },
        {
          gdo:"gdo3"
        },
        {
          gdo:"gdo4"
        },
      ],
      {}
    );
    
    await queryInterface.bulkInsert(
      "role",
      [
        {
          role:"employee"
        },
        {
          role:"admin"
        },
        {
          role:"super_admin"
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("goals", null, {});
    await queryInterface.bulkDelete("users", null, {});
  },
};
