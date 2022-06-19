const Goals = require("../models/goals");
const Users = require("../models/users");
const Status = require("../models/status");
const Op = require("sequelize").Op;
const sequelize = require("sequelize");

async function getGoalsOfSelfUser(id, month, role) {
  Users.belongsTo(Goals, { targetKey: "user_id", foreignKey: "id" });
  Goals.belongsTo(Status, { targetKey: "goal_id", foreignKey: "id" });
  return Users.findAll({
    where: {
      id: id,
    },
    include: {
      model: Goals,
      required: true,
      where: {
        [Op.and]: [sequelize.fn('EXTRACT(MONTH from "date") =', month)],
      },
      include: {
        model: Status,
        required: true
      }
    },
  });
}

async function addGoalsofEmployee({
  goal_name,
  status,
  date,
  user_id,
  createdAt,
  updatedAt,
}) {
  let newGoal = await Goals.create({
    goal_name,
    date,
    user_id,
    createdAt,
    updatedAt,
  });

  goal_id = newGoal.id;

  let newStatus = await Status.create({
    goal_id,
    status,
  });

  return { newGoal, newStatus };
}

async function addGoalsofAdmin({
  goal_name,
  status,
  date,
  user_id,
  createdAt,
  updatedAt,
}) {
  let newGoal = await Goals.create({
    goal_name,
    date,
    user_id,
    createdAt,
    updatedAt,
  });

  goal_id = newGoal.id;

  let newStatus = await Status.create({
    goal_id,
    status,
  });

  return { newGoal, newStatus };
}

async function addGoalsofSuperAdmin({
  goal_name,
  status,
  date,
  user_id,
  createdAt,
  updatedAt,
}) {
  let newGoal = await Goals.create({
    goal_name,
    date,
    user_id,
    createdAt,
    updatedAt,
  });

  goal_id = newGoal.id;

  let newStatus = await Status.create({
    goal_id,
    status,
  });

  return { newGoal, newStatus };
}

async function deleteGoal(id) {
  let deletedStatus = Status.destroy({
    where: { goal_id: id },
  });
  let deletedGoal = Goals.destroy({
    where: { id: id },
  });
  return { deletedStatus, deletedGoal };
}

async function updateGoal({ id, goal_name, status, updatedAt }) {
  let updatedGoal = Goals.update(
    {
      goal_name: goal_name,
      updatedAt: updatedAt,
    },
    {
      where: {
        id: id,
      },
    }
  );

  let updatedStatus = Status.update(
    {
      status: status,
    },
    {
      where: {
        goal_id: id,
      },
    }
  );

  return { updatedGoal, updatedStatus };
}

module.exports = {
  getGoalsOfSelfUser,
  addGoalsofEmployee,
  addGoalsofAdmin,
  addGoalsofSuperAdmin,
  deleteGoal,
  updateGoal,
};
