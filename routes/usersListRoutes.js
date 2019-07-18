// module.exports = function(app) {
//
//     const usersList = require('../controllers/usersListController');
//
//     // users Routes
//     app.route('/api/users')
//         .get(usersList.getUsers)
//         .post(usersList.createUser);
//
//
//     app.route('/api/users/:id')
//         .get(usersList.readUser)
//         .put(usersList.updateUser)
//         .delete(usersList.deleteUser);
// };


let users = [
    {
        id: 1,
        followed: false,
        firstName: "Dmytro",
        lastName: "Sydoriv",
        photoUrls: {
            small: "http://tomorrowslawyer.org/wp-content/uploads/2017/01/dmytro-kukhnyuk_800x800_acf_cropped.jpg",
            large: "http://tomorrowslawyer.org/wp-content/uploads/2017/01/dmytro-kukhnyuk_800x800_acf_cropped.jpg"
        },
        status: "I'm a boss",
        location: {city: "Kyiv", country: "Ukraine"}
    },
    {
        id: 2,
        followed: false,
        firstName: "Vasia",
        lastName: "Pupkin",
        photoUrls: {
            small: "http://politika-v-rashke.ru/wp-content/uploads/2018/09/vasya-voskres.jpg",
            large: "http://politika-v-rashke.ru/wp-content/uploads/2018/09/vasya-voskres.jpg"
        },
        status: "I'm available",
        location: {city: "Dnipro", country: "Ukraine"}
    },
    {
        id: 3,
        followed: true,
        firstName: "Ivan",
        lastName: "Ivanov",
        photoUrls: {
            small: "https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg",
            large: "https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg"
        },
        status: "Hey, hello",
        location: {city: "Toronto", country: "Canada"}
    },
    {
        id: 4,
        followed: true,
        firstName: "Petro",
        lastName: "Petrov",
        photoUrls: {
            small: "https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg",
            large: "https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg"
        },
        status: "How are you?",
        location: {city: "Lviv", country: "Ukraine"}
    },
    {
        id: 5,
        followed: false,
        firstName: "Sashko",
        lastName: "Shushko",
        photoUrls: {
            small: "https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg",
            large: "https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg"
        },
        status: "What's your mood?",
        location: {city: "Warsaw", country: "Poland"}
    },
    {
        id: 6,
        followed: true,
        firstName: "Paraska",
        lastName: "Paraskiva",
        photoUrls: {
            small: null,
            large: "https://upload.wikimedia.org/wikipedia/uk/6/68/Poddubny.jpg"
        },
        status: "I'm pretty",
        location: {city: "Boston", country: "US"}
    },
];

const express = require('express');
const usersRouter = express.Router();

usersRouter.get('/api/users', function (req, res) {
    res.send(
        { users: users }
    )
});

usersRouter.post('/api/users', function (req, res) {
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

usersRouter.get('/api/users/:id', function (req, res) {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) res.status(404).send('The user with given ID is not found');
    res.send(user);

});

module.exports = usersRouter;