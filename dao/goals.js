const Goals = require("../models/goals");
const Users = require("../models/users");

async function getAllGoalsOfEmployee(id) {
  Users.belongsTo(Goals, {targetKey:'user_id', foreignKey:'id'});
  return Users.findAll({
    where:{
      role:"employee",
      id:id,
    },
    include: {
      model: Goals,
      required:true,
    },
  });
}

async function getAllGoalsOfAdmin(id) {
  Users.belongsTo(Goals, {targetKey:'user_id', foreignKey:'id'});
  return Users.findAll({
    where:{
      role:"admin",
      id:id,
    },
    include: {
      model: Goals,
      required:true,
    },
  });
}

async function getAllGoalsOfSuperAdmin(id) {
  Users.belongsTo(Goals, {targetKey:'user_id', foreignKey:'id'});
  return Users.findAll({
    where:{
      role:"super_admin",
      id:id,
    },
    include: {
      model: Goals,
      required:true,
    },
  });
}

async function addGoalsofEmployee({goal_name,status,date,user_id,createdAt,updatedAt}){
  return Goals.create({goal_name,status,date,user_id,createdAt,updatedAt});
}

async function addGoalsofAdmin({goal_name,status,date,user_id,createdAt,updatedAt}){
  return Goals.create({goal_name,status,date,user_id,createdAt,updatedAt});
}

async function addGoalsofSuperAdmin({goal_name,status,date,user_id,createdAt,updatedAt}){
  return Goals.create({goal_name,status,date,user_id,createdAt,updatedAt});
}

module.exports = { getAllGoalsOfEmployee, getAllGoalsOfAdmin, getAllGoalsOfSuperAdmin, addGoalsofEmployee, addGoalsofAdmin, addGoalsofSuperAdmin };
