const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const cors = require('cors');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
// CORS middleware to handle cross-origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://food-recipe-client-38kigbhwn-samithas-projects-66fa87b4.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200); // Send OK status for preflight requests
  }

  next();
});

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'], 
  credentials: true, 
}));

app.options('*', cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
