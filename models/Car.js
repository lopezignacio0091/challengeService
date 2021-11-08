const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'Auto'
    },
    brand: {
        type: String,
    },
    patent: {
        type: String,
    },
    colour: {
        type: String,
    },
    year: {
        type: Date,
    },

});

module.exports = mongoose.model('car', CarSchema);