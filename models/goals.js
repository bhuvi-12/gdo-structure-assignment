const db = require("../models/index");
const { DataTypes } = require("sequelize");
const Users = require("./users");

const Goals = db.sequelize.define(
  "goals",
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    goal_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
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

module.exports = Goals;
