const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    description:{
        type: 'string'
    },
    price:{
        type: 'number',
        required: true
    },
    quantity:{
        type: 'number',
        required: true
    },
    image:{
        type: 'string'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Product', Schema)