const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const goalsDao = require("./dao/goals");

router.get('/employee', jsonParser, async(req, res) => {
    try{
        res.json({
            data: await goalsDao.getAllGoalsOfEmployee(req.query.id),
        });
    } catch(err){
        res.json({
            error: err.toString(),
        })
    }
});

router.get('/admin', jsonParser, async(req, res) => {
    try{
        res.json({
            data: await goalsDao.getAllGoalsOfAdmin(req.query.id),
        });
    } catch(err){
        res.json({
            error: err.toString(),
        })
    }
});

router.get('/superadmin', jsonParser, async(req, res) => {
    try{
        res.json({
            data: await goalsDao.getAllGoalsOfSuperAdmin(req.query.id),
        });
    } catch(err){
        res.json({
            error: err.toString(),
        })
    }
});

module.exports = router;