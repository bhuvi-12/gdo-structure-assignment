const Users = require("../models/users");

async function getAllUsers(role){
    return Users.findAll({
        where:{
            role:role,
        }
    });
}

module.exports = {getAllUsers};