const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const SubscribersSchema = new mongoose.Schema({
    user_id: [{type: ObjectId, ref: 'Users'}]
}, {collection: 'subscribers'});

module.exports = mongoose.model('Subscribers', SubscribersSchema);