// app.js
const express = require('express');
const mongoose = require('mongoose');
const ItemRoutes = require('./routes/itemRoutes')
const userRoutes = require('./routes/userRoutes')
const { json } = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended: false}));



//define /api/items endpoint
app.use("/api/items", ItemRoutes);

app.use("/api/users", userRoutes);




app.get('/', (req, res) => {
  res.send('Login successful');
});



// MongoDB connection
mongoose.connect("mongodb+srv://prem1125:afnvhHkZw68oo23m@backenddb.d7l4tn0.mongodb.net/backendDB?retryWrites=true&w=majority", {
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
