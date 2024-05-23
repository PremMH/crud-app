const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    enum: ['admin', 'student'],
    default: 'user'
  },
  usn: {
    type: String, 
    required: [true, 'USN is required'],
    unique: true,
    uppercase: true,
    match: [/^[A-Z0-9]{10}$/, 'USN must be exactly 10 characters and alphanumeric']
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
}, {
  timestamps: true
});

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
