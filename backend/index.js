import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './dbConfig/dbConnection.js';
// Load environment variables
dotenv.config();
dbConnect();
const app = express();

// Middleware
app.use(express.json()); // For parsing JSON



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
