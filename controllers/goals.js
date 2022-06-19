const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const goalsDao = require("../dao/goals");

const jwtUtil = require("../jwt/jwtVerify");
router.use(jwtUtil.checkToken);

router.get("/goals", async (req, res) => {
  try {
    res.json({
      data: await goalsDao.getGoalsOfSelfUser(
        payload.id,
        req.query.month,
        payload.role
      ),
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.get("/goals-other", jwtUtil.isAdmin, async (req, res) => {
  try {
    res.json({
      data: await goalsDao.getGoalsOfSelfUser(
        req.query.id,
        req.query.month,
        req.query.role
      ),
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.post("/employee-goals", jsonParser, async (req, res) => {
  const payload = jwt.verify(
    req.headers.authorization.split(" ")[1],
    "SecretKey"
  );
  const userId = parseInt(req.query.user_id);
  try {
    if (payload.id === userId) {
      const newGoals = await goalsDao.addGoalsofEmployee(req.body);
      res.json({
        message: "goals inserted successfully",
        data: newGoals,
      });
    } else {
      res.json({
        message: "you can't add to others goals",
      });
    }
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.post("/admin-goals", jwtUtil.isAdmin, jsonParser, async (req, res) => {
  const payload = jwt.verify(
    req.headers.authorization.split(" ")[1],
    "SecretKey"
  );
  const userId = parseInt(req.query.user_id);
  try {
    if (payload.id === userId) {
      const newGoals = await goalsDao.addGoalsofAdmin(req.body);
      res.json({
        message: "goals inserted successfully",
        data: newGoals,
      });
    } else {
      res.json({
        message: "you can't add to others goals",
      });
    }
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.post("/super_admin-goals", jwtUtil.isSuperAdmin, jsonParser, async (req, res) => {
    const payload = jwt.verify(
      req.headers.authorization.split(" ")[1],
      "SecretKey"
    );
    const userId = parseInt(req.query.user_id);
    try {
      if (payload.id === userId) {
        const newGoals = await goalsDao.addGoalsofSuperAdmin(req.body);
        res.json({
          message: "goals inserted successfully",
          data: newGoals,
        });
      } else {
        res.json({
          message: "you can't add to others goals",
        });
      }
    } catch (err) {
      res.json({
        error: err.toString(),
      });
    }
  }
);

router.put("/update", jsonParser, async (req, res) => {
  const payload = jwt.verify(
    req.headers.authorization.split(" ")[1],
    "SecretKey"
  );
  const userId = parseInt(req.query.user_id);
  try {
    if (payload.id === userId) {
      await goalsDao.updateGoal(req.body);
      res.json({
        message: "goals updated successfully",
      });
    } else {
      res.json({
        message: "you can't update others goals",
      });
    }
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.delete("/delete", async (req, res) => {
  const payload = jwt.verify(
    req.headers.authorization.split(" ")[1],
    "SecretKey"
  );
  const userId = parseInt(req.query.user_id);
  try {
    if (payload.id === userId) {
      await goalsDao.deleteGoal(req.query.id);
      res.json({
        message: "goal deleted successfully",
      });
    } else {
      res.json({
        message: "you can't delete others goals",
      });
    }
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

module.exports = router;
