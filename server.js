const express = require('express');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const goalsRouter = require('./controllers/goals');
const usersRouter = require('./controllers/users');
const authRouter = require('./controllers/auth');

app.use('/goals',goalsRouter);

app.use('/users',usersRouter);

app.use("/login",authRouter);


app.listen(port, () => {
    console.log('Server is Started');
});