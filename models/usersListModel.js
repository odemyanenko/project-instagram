'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsersSchema = new Schema({
    firstName: {
        type: String,
        required: 'Kindly enter the user\'s firstname'
    },
    lastName: {
        type: String,
        required: 'Kindly enter the user\'s lasttname'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    followed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Users', UsersSchema);