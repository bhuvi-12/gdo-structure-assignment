const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
var jsonParser = bodyParser.json();
const users = require("./dao/users");
const bcrypt = require("bcrypt");

router.post("/", jsonParser, async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const matching = await users.getUserCredentials(email);

  if (
    matching.length == 0 ||
    bcrypt.compareSync(password, matching[0].password) === false
  ) {
    res.status(401).send({ message: "Wrong Credentials" });
  } else {
    payload = {};
    const token = jwt.sign(payload, matching[0].password);
    res.json({ jwt: token, details: matching });
  }
});

module.exports = router;
