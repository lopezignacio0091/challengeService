const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'services'
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cars'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    total:{
        type: Number,
    }
});

module.exports = mongoose.model('transaction', TransactionSchema);