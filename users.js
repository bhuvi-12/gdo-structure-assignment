const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const usersDao = require("./dao/users");

router.get('/users', jsonParser, async(req, res) => {
    
    try{
        res.json({
            data: await usersDao.getAllUsers(req.query.role),
        });
    } catch(err){
        res.json({
            error: err.toString(),
        })
    }
});

module.exports = router;