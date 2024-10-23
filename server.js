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
  origin: ['https://food-recipe-client-fru5lhke5-samithas-projects-66fa87b4.vercel.app/'], // Allow your client
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'], // Include OPTIONS for preflight
  credentials: true,
}));

app.options('*', cors()); 
// Middleware for parsing JSON requests
app.use(express.json());

// Manually handle preflight requests if necessary
 // Preflight response for all routes

// Route definitions
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
