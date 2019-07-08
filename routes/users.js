const express = require('express');

// import { createUser, getUserById, loginUser } from "./../services/UserService";

const router = express.Router();

// const users_controller = require('../controllers/usersController');
//
// router.get("/", users_controller.user_create_get);
// router.get('/:id', users_controller.user_detail);

router.post('/', function (req, res, next) {
    console.log('get adduser');

    // let users = [];
    //
    // users = [
    //     {
    //         nickname: "vshkil",
    //         //avatar:,
    //         firstname: "Volodymyr",
    //         lastname: "Shkil",
    //         sex: "M",
    //         birthdate: "",
    //         email: "vshkil@gmail.com",
    //         password: "222"
    //     }
    // ];
    // users.forEach(function (user) {
    //     // new User(user).save();
    //     createUser(user, function (err) {
    //         if (err) {
    //             console.log(err)
    //         } else console.log("succesfully added!")
    //     });
    // });
});

module.exports = router;