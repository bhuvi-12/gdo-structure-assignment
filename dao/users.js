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

async function getEmployeesOfAdmin(adminId) {
  Users.belongsTo(Users, { targetKey: "id", foreignKey: "id" });
  return Users.findAll({
    where: {
      role: "employee",
      id: { [Op.ne]: adminId },
    },
    include: {
      model: Users,
      required: true,
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

module.exports = {
  getAllUsers,
  getUserCredentials,
  getEmployeesOfAdmin,
  addUser,
};
