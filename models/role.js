const db = require("../models/index");
const { DataTypes } = require("sequelize");

const Role = db.sequelize.define(
  "role",
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Role;
