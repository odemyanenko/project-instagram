const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const LikesSchema = new mongoose.Schema({
    user_id: [{type: ObjectId, ref: 'Users'}],
    post_id: [{type: ObjectId, ref: 'Posts'}],
    liked_at: {
        type: Date,
        required: true,
        default: Date.now
    }
}, {collection: 'likes'});

module.exports = mongoose.model('Likes', LikesSchema);