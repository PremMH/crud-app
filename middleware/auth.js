// middleware/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables from .env file

const auth = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized Access', status: 401 });
  }

  // Check if header is in Bearer format
  const tokenParts = token.split(' ');

  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ message: 'Invalid authorization header format' });
  }

  const tokenValue = tokenParts[1];

  try {
    const decoded = jwt.verify(tokenValue, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid, Can you please login ?' });
  }
};

module.exports = auth;
