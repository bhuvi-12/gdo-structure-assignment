"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          name: "user1",
          email: "user.1@wal.com",
          password: "user1@11",
          mobile: "8912345543",
          qualification: "B.Tech",
          role: "employee",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "user2",
          email: "user.2@wal.com",
          password: "user2@202",
          mobile: "9876373624",
          qualification: "B.Tech",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "user3",
          email: "user.3@wal.com",
          password: "user3@39993",
          mobile: "9909321568",
          qualification: "MBA",
          role: "super_admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "goals",
      [
        {
          id: 1,
          goal_name: "orm project testing",
          status: "pending",
          date: "2022-03-21",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          goal_name: "orm project coding",
          status: "completed",
          date: "2022-02-02",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          goal_name: "orm project review",
          status: "pending",
          date: "2022-03-25",
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          goal_name: "orm project delivery",
          status: "failed",
          date: "2022-03-15",
          user_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("goals", null, {});
    await queryInterface.bulkDelete("users", null, {});
  },
};
