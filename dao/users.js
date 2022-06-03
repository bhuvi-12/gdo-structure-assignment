const Users = require("../models/users");

async function getAllUsers(role){
    return Users.findAll({
        where:{
            role:role,
        }
    });
}

async function getUserCredentials(email,password){
    return Users.findAll({
        where:{
            email:email,
            password:password
        }
    });
}

module.exports = {getAllUsers, getUserCredentials};