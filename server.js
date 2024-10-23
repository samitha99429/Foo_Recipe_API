const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Set up CORS
app.use(cors({
  origin: ['https://food-recipe-client-dfjrgg2qf-samithas-projects-66fa87b4.vercel.app'], // Allow your client URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow OPTIONS for preflight
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'], // Include allowed headers
}));

// Middleware for parsing JSON requests
app.use(express.json());

// Manually handle preflight requests if necessary
app.options('*', cors()); 

// Route definitions
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
