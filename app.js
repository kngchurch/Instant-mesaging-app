const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');  
const db = require('./config/db');

// load environment variables from .env file
dotenv.config();

const app = express();

// middleware to parse JSON bodies
app.use(express.json());

// use user routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});