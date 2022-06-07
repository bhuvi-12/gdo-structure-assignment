const Users = require("../models/users");
const Op = require("sequelize").Op;

async function getAllUsers(role) {
  return Users.findAll({
    where: {
      role: role,
    },
  });
}

async function getUserCredentials(email, password) {
  return Users.findAll({
    where: {
      email: email,
      password: password,
    },
  });
}

async function getEmployeesOfAdmin(gdo,adminId) {
  return Users.findAll({
    where: {
      role: "employee",
      gdo:gdo,
      id: { [Op.ne]: adminId },
    }
  });
}

async function addUser({
  name,
  email,
  password,
  mobile,
  qualification,
  role,
  gdo,
  createdAt,
  updatedAt,
}) {
  return Users.create({
    name,
    email,
    password,
    mobile,
    qualification,
    role,
    gdo,
    createdAt,
    updatedAt,
  });
}

async function findAdmins(){
  return Users.findAll({
    where: {
      role: "admin",
    }
  });
}

module.exports = {
  getAllUsers,
  getUserCredentials,
  getEmployeesOfAdmin,
  addUser,
  findAdmins
};
