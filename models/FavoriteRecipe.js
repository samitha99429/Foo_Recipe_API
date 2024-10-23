// const mongoose = require('mongoose');

// const favoriteRecipeSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   recipeId: {
//     type: String,
//     required: true,
//   },
//   recipeName: {
//     type: String,
//     required: true,
//   },
//   recipeCategory: {
//     type: String,
//     required: true,
//   },
//   recipeImage: {
//     type: String,
//     required: true,
//   },
//   recipeInstructions: {
//     type: String,
//   }
// });

// const FavoriteRecipe = mongoose.model('FavoriteRecipe', favoriteRecipeSchema);

// module.exports = FavoriteRecipe;


const mongoose = require('mongoose');

const favoriteRecipeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  idMeal: {
    type: String,
    required: true,
  },
  strMeal: {
    type: String,
    required: true,
  },
  strMealThumb: {
    type: String,
    required: true,
  },
  recipeCategory: {
    type: String, // Optional, if you still want to store category
  },
});

const FavoriteRecipe = mongoose.model('FavoriteRecipe', favoriteRecipeSchema);

module.exports = FavoriteRecipe;
