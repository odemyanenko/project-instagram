'use strict';

const mongoose = require('mongoose'),
    Users = mongoose.model('Users');

exports.getUsers = function(req, res) {
    Users.find({}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.createUser = function(req, res) {
    let newUser = new User(req.body);
    newUser.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.readUser = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.updateUser = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.deleteUser = function(req, res) {
    User.remove({
        _id: req.params.id
    }, function(err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'User successfully deleted' });
    });
};
