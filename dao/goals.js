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

async function addGoalsofEmployee({name,email,password,mobile,role,createdAt,updatedAt}){
  return Users.create({name,email,password,mobile,role,createdAt,updatedAt});
}

module.exports = { getAllGoalsOfEmployee, getAllGoalsOfAdmin, getAllGoalsOfSuperAdmin, addGoalsofEmployee };
