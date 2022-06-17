const db = require("../models/index");
const { DataTypes } = require("sequelize");
const Goals = require("./goals");

const Status = db.sequelize.define(
  "status",
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    goal_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Goals,
        key: "id",
      }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Status;
