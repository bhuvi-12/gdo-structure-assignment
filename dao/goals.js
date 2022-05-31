const Goals = require("../models/goals");
const Users = require("../models/users");

async function getAllGoalsOfEmployee(id) {
  Users.belongsTo(Goals, {targetKey:'user_id', foreignKey:'user_id'});
  return Users.findAll({
    where:{
      role:"employee",
      user_id:id,
    },
    include: {
      model: Goals,
      required:true,
    },
  });
}

async function getAllGoalsOfAdmin(id) {
  Users.belongsTo(Goals, {targetKey:'user_id', foreignKey:'user_id'});
  return Users.findAll({
    where:{
      role:"admin",
      user_id:id,
    },
    include: {
      model: Goals,
      required:true,
    },
  });
}

async function getAllGoalsOfSuperAdmin(id) {
  Users.belongsTo(Goals, {targetKey:'user_id', foreignKey:'user_id'});
  return Users.findAll({
    where:{
      role:"super_admin",
      user_id:id,
    },
    include: {
      model: Goals,
      required:true,
    },
  });
}

module.exports = { getAllGoalsOfEmployee, getAllGoalsOfAdmin, getAllGoalsOfSuperAdmin };
