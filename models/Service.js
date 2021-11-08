const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    cost: {
        type: Number,
        required: true
    },
    type: {
        type: String,
    },
});

module.exports = mongoose.model('service', ServiceSchema);