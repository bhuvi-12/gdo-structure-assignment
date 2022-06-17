const db = require("../models/index");
const { DataTypes } = require("sequelize");
const Gdo = require("./gdo");
const Role = require("./role");

const Users = db.sequelize.define(
  "users",
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    qualification:{
      type: DataTypes.STRING,
    },
    role:{
      type: DataTypes.INTEGER,
      references: {
        model: Role,
        key: "id",
      }
    },
    gdo:{
      type: DataTypes.INTEGER,
      references: {
        model: Gdo,
        key: "id",
      }
    },
    createdAt:{
      type: DataTypes.DATE
    },
    updatedAt:{
      type: DataTypes.DATE
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Users;