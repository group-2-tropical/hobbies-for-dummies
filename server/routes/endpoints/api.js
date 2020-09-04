const apiEndpoints = require('express').Router()
const PixabayController = require('../../controllers/ApiPixabayController')
const JikanController = require('../../controllers/ApiJikanController')
const RecipeController = require('../../controllers/ApiRecipeController')

apiEndpoints.get('/pixabay', PixabayController.getPixabay)
apiEndpoints.get('/jikan', JikanController.getJikan)
apiEndpoints.get('/recipe', RecipeController.getRecipe)

module.exports = apiEndpoints