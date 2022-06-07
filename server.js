const express = require('express');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const goalsRouter = require('./goals');
const usersRouter = require('./users');
const authRouter = require('./auth');

app.use('/user',goalsRouter);

app.use('/users',usersRouter);

app.use("/login",authRouter);


app.listen(port, () => {
    console.log('Server is Started');
});