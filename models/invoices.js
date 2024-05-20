const mongoose = require('mongoose');

const expenditure = mongoose.Schema({
    name: {
        type: String,
    },
    busNo: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
    },
    description: {
        type: String,
        minlength: 0,
        maxlength: 100
    }


}, {
    timestamps: true
})


const Invoice = mongoose.model('Invoice', expenditure)

module.exports = Invoice