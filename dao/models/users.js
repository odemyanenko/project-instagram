const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        index: {unique: true},
        trim: true
    },
    avatar: {data: Buffer, contentType: String},
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    sex: {
        type: String,
        enum: ["M", "F"]
    },
    birthdate: {
        type: Date
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {type: String},
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {type: Date}
}, {collection: 'users'});

module.exports = mongoose.model('Users', UsersSchema);