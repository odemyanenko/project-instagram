const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();
const db = require('./db/db');

const port = 8000;

require('./routes/index')(app, {});

// const usersRouter = require('./routes/users');
// app.use("/users", usersRouter);

db.connect();

//require('./db/data');

let users = [
    {
        id: 1,
        photoUrl: 'http://tomorrowslawyer.org/wp-content/uploads/2017/01/dmytro-kukhnyuk_800x800_acf_cropped.jpg',
        followed: false,
        firstName: "Dmytro",
        lastName: "Sydoriv",
        status: "I'm a boss",
        location: {city: "Kyiv", country: "Ukraine"}
    },
    {
        id: 2,
        photoUrl: 'http://politika-v-rashke.ru/wp-content/uploads/2018/09/vasya-voskres.jpg',
        followed: false,
        firstName: "Vasia",
        lastName: "Pupkin",
        status: "I'm available",
        location: {city: "Dnipro", country: "Ukraine"}
    },
    {
        id: 3,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg',
        followed: true,
        firstName: "Ivan",
        lastName: "Ivanov",
        status: "Hey, hello",
        location: {city: "Toronto", country: "Canada"}
    },
    {
        id: 4,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg',
        followed: true,
        firstName: "Petro",
        lastName: "Petrov",
        status: "How are you?",
        location: {city: "Lviv", country: "Ukraine"}
    },
    {
        id: 5,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg',
        followed: false,
        firstName: "Sashko",
        lastName: "Shushko",
        status: "What's your mood?",
        location: {city: "Warsaw", country: "Poland"}
    },
    {
        id: 6,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg',
        followed: true,
        firstName: "Paraska",
        lastName: "Paraskiva",
        status: "I'm pretty",
        location: {city: "Boston", country: "US"}
    },
];

const user10 = {
    photoUrl: 'https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg',
    followed: true,
    firstName: "Paraska",
    lastName: "Paraskiva",
    status: "I'm pretty",

};

// location: {city: "Boston", country: "US"}

// app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', function (req, res) {
    res.send('Hello World, Vasia!')
});
app.get('/api/users', function (req, res) {
    res.send({ users: users })
});
app.post('/api/users', function (req, res) {
    console.log(req.body);
    // console.log(JSON.parse(req.body));

    // if (!req.body.firstName || req.body.firstName.length < 3) {
    //     res.status(400).send('Firstname is required and should be at least 3 characters');
    //     return;
    // }
    let user = {
        id: users.length + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    };

        // ...JSON.parse(req.body),
        // ...req.body,
        // id: users.length + 1,
        // location: { ...req.body.location }
    // };
    user.id = users.length + 1;
    // user.location = {...req.body.location };

    users.push(user);
    res.send(user);


});

app.get('/api/users/:id', function (req, res) {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) res.status(404).send('The user with given ID is not found');
    res.send(user);

});
app.set('port', process.env.PORT || port);
app.listen(port, () => {
    console.log('Example app listening on port ' + app.get('port'));
});