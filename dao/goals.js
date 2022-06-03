const Goals = require("../models/goals");
const Users = require("../models/users");
const Op = require("sequelize").Op;
const sequelize = require("sequelize");

async function getAllGoalsOfUser(id,role,month) {
  Users.belongsTo(Goals, {targetKey:'user_id', foreignKey:'id'});
  return Users.findAll({
    where:{
      role:role,
      id:id,
    },
    include: {
      model: Goals,
      required:true,
      where: {
        [Op.and] : [
           sequelize.fn('EXTRACT(MONTH from "date") =', month)
        ]
      }
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
