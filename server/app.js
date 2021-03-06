// --------------------------------------------------------------------------------
// Get environment settings 
// --------------------------------------------------------------------------------

require('dotenv').config();

// --------------------------------------------------------------------------------
// Get dependencies
// --------------------------------------------------------------------------------

const express      = require('express');
const cors         = require('cors');

// --------------------------------------------------------------------------------
// Create the app
// --------------------------------------------------------------------------------

const app = express();

// --------------------------------------------------------------------------------
// Middleware
// --------------------------------------------------------------------------------

app.use(cors());

// --------------------------------------------------------------------------------
// Routes
// --------------------------------------------------------------------------------

app.get('/countries', (req, res, next) => {
  const countries = require("./countries.json")
  res.json(countries);
});

// --------------------------------------------------------------------------------
// Export (needed in bin/www)
// --------------------------------------------------------------------------------

module.exports = app;