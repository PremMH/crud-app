const mongoose = require('mongoose');
const viaSchema  = new mongoose.Schema(
    {
    name: {
        type: String, 
        required: true
    },
    arrived: {
        type: Boolean,
        required: true,
        default: false
    },
    left: {
        type: Boolean, 
        required: true,
        default: false
    }
}

)
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
        type: [viaSchema],
        required: false
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
    }
}, {
    timestamps: true
});
const Route = mongoose.model('Route', userSchema);

module.exports = Route;
