const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const usersDao = require("../dao/users");
const users = require("../models/users");
const jwtUtil = require("../jwt/jwtVerify");

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

router.get("/gdo", jwtUtil.checkToken, jsonParser, async (req, res) => {
  try {
    const id = req.query.id;
    const aUser = await users.findOne({where:{id}});
    res.json({
      data: await usersDao.getEmployeesOfAdmin(aUser.gdo, aUser.id),
    });
  } catch (err) {
    res.json({
      error: err.toString(),
    });
  }
});

router.get("/admin", jwtUtil.checkToken, async (req,res) => {
  try{
    res.json({
      data: await usersDao.findAdmins(),
    });
  }catch(err){
    res.json({
      error: err.toString(),
    });
  }
});

router.get("/gdo-admit", jwtUtil.checkToken, async (req,res) => {
  try{
    res.json({
      data: await usersDao.findGdoPresence(req.query.role, req.query.gdo),
    });
  }catch(err){
    res.json({
      error: err.toString(),
    });
  }
})

module.exports = router;
