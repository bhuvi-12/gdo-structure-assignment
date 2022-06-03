const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const goalsDao = require("./dao/goals");

router.get('/goals', jsonParser, async(req, res) => {
    try{
        res.json({
            data: await goalsDao.getAllGoalsOfUser(req.query.id,req.query.role),
        });
    } catch(err){
        res.json({
            error: err.toString(),
        })
    }
});

router.post('/employee', jsonParser, async(req, res) => {
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

// router.get('/goals', jsonParser, async(req, res) => {
//     try{
//         res.json({
//             data: await goalsDao.getAllGoalsOfAdmin(req.query.id),
//         });
//     } catch(err){
//         res.json({
//             error: err.toString(),
//         })
//     }
// });

router.post('/admin', jsonParser, async(req, res) => {
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

// router.get('/superadmin', jsonParser, async(req, res) => {
//     try{
//         res.json({
//             data: await goalsDao.getAllGoalsOfSuperAdmin(req.query.id),
//         });
//     } catch(err){
//         res.json({
//             error: err.toString(),
//         })
//     }
// });

router.post('/superadmin', jsonParser, async(req, res) => {
    console.log(req.body);
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

module.exports = router;