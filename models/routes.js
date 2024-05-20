const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    via: {
        type: String,
    },
    arrival: {
        type: String,
        required: true
    },
    depart: {
        type: String,
        required: true
    },
    busNo: {
        type: String,
        required: true
    },
},
{
  timestamps: true
}   
);

const Route = mongoose.model('Route', userSchema);

module.exports = Route;
