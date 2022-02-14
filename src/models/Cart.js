const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }],
    Address:{
        Street:{
            type: String,
            required: true
        },
        Number:{
            type: Number,
            required: true
        },
        City:{
            type: String,
            required: true
        }
    },
    Payment:{
        Method:{
            type: Boolean,
            required: true
        },
        Card:{
            type: String,
            required: true
        },
        Cvc:{
            type:Number,
            required: true
        }
    }

})

module.exports = mongoose.model('Cart', Schema)