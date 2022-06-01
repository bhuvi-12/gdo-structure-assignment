// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class Users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Users.init(
//     {
//       name: DataTypes.STRING,
//       email: DataTypes.STRING,
//       password: DataTypes.STRING,
//       mobile: DataTypes.STRING,
//       qualification: DataTypes.STRING,
//       role: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       modelName: "users",
//     }
//   );
//   return Users;
// };

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

Users.belongsTo(Goals, {foreignKey:'id', required:true });

module.exports = Users;