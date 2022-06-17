const db = require("../models/index");
const { DataTypes } = require("sequelize");

const Gdo = db.sequelize.define(
  "gdo",
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    gdo: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Gdo;
