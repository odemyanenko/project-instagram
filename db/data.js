import {
    createUser,
    getUserById,
    loginUser
} from "./../services/userService";

//const User = require('../dao/models/users');


let users = [];

users = [
    {
        nickname: "vshkil",
        //avatar:,
        firstname: "Volodymyr",
        lastname: "Shkil",
        sex: "M",
        birthdate: "",
        email: "vshkil@gmail.com",
        password: "222"
    },
    // {
    //     nickname: "olgadem",
    //     //avatar:,
    //     firstname: "Olga",
    //     lastname: "Demyanenko",
    //     sex: "F",
    //     birthdate: "1977/09/25",
    //     email: "olgadem@hotmail.com",
    //     password: "123"
    // },
    // {
    //     nickname: "anauk",
    //     //avatar:,
    //     firstname: "Marina",
    //     lastname: "Savluchinska",
    //     sex: "F",
    //     // birthdate: "",
    //     email: "anirammir06@meta.ua",
    //     password: "111"
    // }
];

users.forEach(function (user) {
    // new User(user).save();
    createUser(user, function (err) {
        if (err) {
            console.log(err)
        } else console.log("succesfully added!")
    });

});
