const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
var jsonParser = bodyParser.json();
const users = require("../dao/users");
const bcrypt = require("bcrypt");

router.post("/", jsonParser, async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const matching = await users.getUserCredentials(email);
  const userGdo = await users.getUserGdo(email);

  if (
    matching === null ||
    bcrypt.compareSync(password, matching.user.password) === false
  ) {
    res.status(401).send({ message: "Wrong Credentials" });
  } else {
    payload = {email:matching.user.email};
    const token = jwt.sign(payload, "SecretKey");
    res.json({ jwt: token, details: matching, gdo: userGdo.gdo});
  }
});

module.exports = router;