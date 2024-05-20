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
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: ['admin', 'student', 'crew'],
    default: 'user'
  },
  usn: {
    type: String, 
    required: [true, 'USN is required'],
    unique: true,
    uppercase: true,
    match: [/^[A-Z0-9]{10}$/, 'USN must be exactly 10 characters and alphanumeric']
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
