const jwt = require("jsonwebtoken");

function checkToken(req, res, next){
    const authHeader = req.headers.authorization;
    if(authHeader){
      const token = authHeader.split(" ")[1];
  
      try{
        const payload = jwt.verify(token,"SecretKey");
        next();
      }catch(err){
        res.status(401).send({error: err.toString()});
      }
    }
    else{
      res.status(401).send({error: "User is not authorized"});
    }
}

module.exports = {checkToken}