const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const goalsRouter = require('./goals');
const usersRouter = require('./users');

app.use('/goals',goalsRouter);

app.use('/users',usersRouter);


app.listen(port, () => {
    console.log('Server is Started');
});