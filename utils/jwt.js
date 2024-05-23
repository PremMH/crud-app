// utils/jwt.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
  return jwt.sign({ id: user._id, mobile: user.mobile, role: user.role }, process.env.JWT_SECRET, { expiresIn: '3h' });
};


// const verifyToken = (token) => {
//   try {
//     const decoded = jwt.verify(token, 'your_jwt_secret');
//     return decoded;
//   } catch (error) {
//     return null;
//   }
// };
module.exports = generateToken;
