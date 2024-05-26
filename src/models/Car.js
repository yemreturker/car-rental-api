const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    price_per_day: {
        type: Number,
        required: true,
    },
    availability_status: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model('Car', CarSchema);
