const mongoose = require('mongoose');

const SaleItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('SaleItem', SaleItemSchema);