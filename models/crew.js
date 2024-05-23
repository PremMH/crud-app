const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [50, 'Name must be less than 50 characters long']
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    unique: true,
    match: [/^\d{10}$/, 'Mobile number must be exactly 10 digits']
  },
  busNo: {
    type: String, 
    required: true
  }

}, {
  timestamps: true
});

const Crew = mongoose.model('Crew', userSchema);

module.exports = Crew;
