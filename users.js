const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const usersDao = require("./dao/users");

router.get("/users", jsonParser, async (req, res) => {
  try {
    res.json({
      data: await usersDao.getAllUsers(req.query.role),
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.post("/users", jsonParser, async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await usersDao.addUser(req.body);
    res.json({
      message: "user inserted successfully",
      data: newUser,
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.get("/gdo", jsonParser, async (req, res) => {
  try {
    res.json({
      data: await usersDao.getEmployeesOfAdmin(req.query.id),
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

module.exports = router;
