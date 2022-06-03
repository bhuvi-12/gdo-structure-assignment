const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
var jsonParser = bodyParser.json();
const users = require("./dao/users");

router.post('/', jsonParser, async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const matching = await users.getUserCredentials(email, password);

    if(matching.length == 0){
        res.status(401).send({message: "Wrong Credentials"});
    }
    else{
        payload = {};
        const token = jwt.sign(payload, password);
        res.json({ jwt: token});
    }
});

module.exports = router;