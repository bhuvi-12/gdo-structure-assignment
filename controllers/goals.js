const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const goalsDao = require("../dao/goals");

const jwtUtil = require("../jwt/jwtVerify");

router.get("/goals", jwtUtil.checkToken, jsonParser, async (req, res) => {
  try {
    res.json({
      data: await goalsDao.getAllGoalsOfUser(
        req.query.id,
        req.query.role,
        req.query.month
      ),
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.post("/employee-goals", jwtUtil.checkToken, jsonParser, async (req, res) => {
  try {
    const newGoals = await goalsDao.addGoalsofEmployee(req.body);
    res.json({
      message: "goals inserted successfully",
      data: newGoals,
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.post("/admin-goals", jwtUtil.checkToken, jsonParser, async (req, res) => {
  try {
    const newGoals = await goalsDao.addGoalsofAdmin(req.body);
    res.json({
      message: "goals inserted successfully",
      data: newGoals,
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.post("/super_admin-goals", jwtUtil.checkToken, jsonParser, async (req, res) => {
  try {
    const newGoals = await goalsDao.addGoalsofSuperAdmin(req.body);
    res.json({
      message: "goals inserted successfully",
      data: newGoals,
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.put("/update", jwtUtil.checkToken, jsonParser,async (req, res) => {
  try {
    await goalsDao.updateGoal(req.body);
    res.json({
      message: "goals updated successfully",
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.delete("/delete", jwtUtil.checkToken, async (req, res) => {
  try {
    await goalsDao.deleteGoal(req.query.id);
    res.json({
      message: "goal deleted successfully",
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

module.exports = router;
