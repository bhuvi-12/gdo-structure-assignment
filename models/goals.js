// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class Goals extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Goals.init(
//     {
//       id: DataTypes.INTEGER,
//       goal: DataTypes.STRING,
//       state: DataTypes.STRING,
//       date: DataTypes.DATE,
//       user_id: DataTypes.INTEGER,
//     },
//     {
//       sequelize,
//       modelName: "goals",
//     }
//   );
//   return Goals;
// };

const db = require("../models/index");
const { DataTypes } = require("sequelize");

const Goals = db.sequelize.define(
  "goals",
  {
    goal_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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
      primaryKey: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Goals;
