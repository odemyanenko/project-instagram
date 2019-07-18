const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const Joi = require('joi'); // validator joi
const app = express();
const db = require('./db/db');

const port = 8000;

require('./routes/index')(app, {});

// const usersRouter = require('./routes/users');
// app.use("/users", usersRouter);

db.connect();

//require('./db/data');

// app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// API routes
// /api/users, /api/users/:id
const usersRouter = require('./routes/usersListRoutes');
app.use(usersRouter);

app.get('/', function (req, res) {
    res.send('Hello World, Vasia!')
});

app.set('port', process.env.PORT || port);
app.listen(port, () => {
    console.log('Server API is listening on port ' + app.get('port'));
});