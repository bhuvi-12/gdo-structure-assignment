const Users = require("../models/users");
const Op = require("sequelize").Op;
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
    },
  });
}

async function getEmployeesOfAdmin(gdo, adminId) {
  return Users.findAll({
    where: {
      role: "employee",
      gdo: gdo,
      id: { [Op.ne]: adminId },
    },
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
  const salt = bcrypt.genSaltSync(saltRounds);
  password = bcrypt.hashSync(password, salt);
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

async function findAdmins() {
  return Users.findAll({
    where: {
      role: "admin",
    },
  });
}

async function findGdoPresence(role,gdo) {
  return Users.findOne({
    where:{
      role:role,
      gdo:gdo
    }
  })
}

module.exports = {
  getAllUsers,
  getUserCredentials,
  getEmployeesOfAdmin,
  addUser,
  findAdmins,
  findGdoPresence
};
