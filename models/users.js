const db = require("../models/index");
const { DataTypes } = require("sequelize");
const Goals = require("./goals");

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
      type: DataTypes.STRING,
      allowNull: false
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