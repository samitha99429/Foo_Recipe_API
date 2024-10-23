const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const cors = require('cors');


dotenv.config();


connectDB();

const app = express();


app.use(cors(corsOptions));


app.use(cors({
  origin: ['https://food-recipe-client-dfjrgg2qf-samithas-projects-66fa87b4.vercel.app'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));


app.use(express.json());


app.options('*', cors()); 


app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
