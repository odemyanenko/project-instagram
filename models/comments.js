const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const CommentsSchema = new mongoose.Schema({
    user_id: [{type: ObjectId, ref: 'Users'}],
    post_id: [{type: ObjectId, ref: 'Users'}],
    message: {
        type: String,
        required: true
    }
}, {collection: 'comments'});

module.exports = mongoose.model('Comments', CommentsSchema);