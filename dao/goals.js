const Goals = require("../models/goals");
const Users = require("../models/users");

async function getAllGoalsOfUser(id,role) {
  Users.belongsTo(Goals, {targetKey:'user_id', foreignKey:'id'});
  return Users.findAll({
    where:{
      role:role,
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

module.exports = { getAllGoalsOfUser, addGoalsofEmployee, addGoalsofAdmin, addGoalsofSuperAdmin };
