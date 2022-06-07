const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const goalsDao = require("./dao/goals");

router.get('/goals', jsonParser, async(req, res) => {
    try{
        res.json({
            data: await goalsDao.getAllGoalsOfUser(req.query.id,req.query.role,req.query.month),
        });
    } catch(err){
        res.json({
            error: err.toString(),
        })
    }
});

router.post('/employee-goals', jsonParser, async(req, res) => {
    console.log(req.body);
    try{
        const newGoals = await goalsDao.addGoalsofEmployee(req.body)
        res.json({
            message: "goals inserted successfully",
            data: newGoals
        });
    } catch(err){
        res.json({
            error: err.toString(),
        })
    }
});

router.post('/admin-goals', jsonParser, async(req, res) => {
    console.log(req.body);
    try{
        const newGoals = await goalsDao.addGoalsofAdmin(req.body)
        res.json({
            message: "goals inserted successfully",
            data: newGoals
        });
    } catch(err){
        res.json({
            error: err.toString(),
        })
    }
});

router.post('/super_admin-goals', jsonParser, async(req, res) => {
    try{
        const newGoals = await goalsDao.addGoalsofSuperAdmin(req.body)
        res.json({
            message: "goals inserted successfully",
            data: newGoals
        });
    } catch(err){
        res.json({
            error: err.toString(),
        })
    }
});

router.delete('/delete', async(req,res) => {
    console.log(req.query.id);
    try{
        await goalsDao.deleteGoal(req.query.id);
        res.json({
            message: "goal deleted successfully",
        })
    }catch(err){
        res.json({
            error: err.toString(),
        })
    }
})

module.exports = router;