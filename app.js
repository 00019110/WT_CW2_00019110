const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config(); // Add this for environment variables

const app = express();
const reviewRoutes = require('./routes/reviews');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
// MongoDB Connection
mongoose.connect('mongodb+srv://bekobek2006:fsNwSCnc7cPNPdcH@cluster0.5qaegax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/', reviewRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
