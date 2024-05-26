const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userCrewRoutes');
const busRoutes = require('./routes/busRoutes');
const errorHandler = require('./middleware/errorHandler');
const User = require('./models/users');
const generateToken = require('./utils/jwt');
const bcrypt = require('bcryptjs');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define /api/users endpoint
app.use("/api/users", userRoutes);

app.use("/api/crew", userRoutes);


// Define /api/bus endpoint
app.use("/api/bus", busRoutes);

// Example route for login
app.post('/login', async (req, res) => {
  const { mobile, password } = req.body;

  try {
    const user = await User.findOne({ mobile });

    if (!user) {
      return res.status(401).json({ message: 'Invalid mobile or password' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Please enter the correct password' });
    }

    const token = generateToken(user);
    res.json({ message: 'Login successful', token: token, status: 200 });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Error handling middleware (this should be the last middleware)
app.use(errorHandler);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
})
  .then(() => {
    console.log('DB connected');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('DB connection failed:', err);
  });
