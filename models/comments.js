const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const CommentsSchema = new mongoose.Schema({
    user_id: [{type: ObjectId, ref: 'Users'}],
    post_id: [{type: ObjectId, ref: 'Posts'}],
    message: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {type: Date}
}, {collection: 'comments'});

module.exports = mongoose.model('Comments', CommentsSchema);