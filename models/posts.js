const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const PostsSchema = new mongoose.Schema({
    user_id: [{type: ObjectId, ref: 'Users'}]
}, {collection: 'posts'});

module.exports = mongoose.model('Posts', PostsSchema);