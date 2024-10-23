const express = require('express');
const { getCategories, getRecipesByCategory, addFavoriteRecipe, getFavoriteRecipes, removeFavoriteRecipe } = require('../controllers/recipeController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();



router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");  // Cache preflight response for 1800 seconds
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    res.send('API is running...');
  });

router.get('/categories', getCategories);
router.get('/category/:category', getRecipesByCategory);

// Routes for favorite recipes (protected)
router.post('/favorites', protect, addFavoriteRecipe);
router.get('/favorites', protect, getFavoriteRecipes);
router.delete('/favorites/:idMeal', protect, removeFavoriteRecipe);

module.exports = router;
