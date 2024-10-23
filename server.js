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
app.use(cors({
  origin: ['https://food-recipe-1g9dwcsz0-samithas-projects-66fa87b4.vercel.app/?vercelToolbarCode=Pfbm17zQ7e8ufcu'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
