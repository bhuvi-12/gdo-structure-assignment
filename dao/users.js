const Users = require("../models/users");
const Gdo = require("../models/gdo");
const Role = require("../models/role");
const Op = require("sequelize").Op;
const bcrypt = require("bcrypt");
const saltRounds = 10;

Gdo.belongsTo(Users, { targetKey: "gdo", foreignKey: "id" });
Role.belongsTo(Users, { targetKey: "role", foreignKey: "id" });

async function getUserCredentials(email) {
  return Role.findOne({
    include: [
      {
        model: Users,
        required: true,
        where: {
          email: email
        }
      },
    ],
  });
}

async function getUserGdo(email) {
  return Gdo.findOne({
    include: [
      {
        model: Users,
        required: true,
        where: {
          email: email
        }
      },
    ],
  });
}

async function getEmployeesOfAdmin(gdo, adminId) {
  return Role.findAll({
    where: {
      role: "employee",
    },
    include: {
      model: Users,
      required: true,
      where: {
        gdo: gdo,
        id: { [Op.ne]: adminId },
      },
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

  if (gdo !== "gdo") {
    var num = gdo.replace(/[^0-9]/g, "");
    gdo = parseInt(num, 10) + 1;
  } else {
    gdo = 1;
  }

  let roleData = { employee: 1, admin: 2, super_admin: 3 };
  role = roleData[role];

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
  return Role.findAll({
    where: {
      role: "admin",
    },
    include: {
      model: Users,
      required: true,
    },
  });
}

async function findGdoPresence(role, gdo) {
  const gdoSet = await Gdo.findOne({
    where: {
      gdo: gdo,
    },
  });
  const roleSet = await Role.findOne({
    where: {
      role: role,
    },
  });

  return Users.findAll({
    where: {
      role: roleSet.id,
      gdo: gdoSet.id,
    },
  });
}

module.exports = {
  getUserCredentials,
  getEmployeesOfAdmin,
  addUser,
  findAdmins,
  findGdoPresence,
  getUserGdo
};
