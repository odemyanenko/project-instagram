const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {type: Date},
}, {collection: 'users'});

module.exports = mongoose.model('Users', UsersSchema);