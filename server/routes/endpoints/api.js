const apiEndpoints = require('express').Router()
const PixabayController = require('../../controllers/PixabyController')
const JikanController = require('../../controllers/JikanController')
const RecipeController = require('../../controllers/RecipeController')

apiEndpoints.get('/pixabay', PixabayController.getPixabay)
apiEndpoints.get('/jikan', JikanController.getJikan)
apiEndpoints.get('/recipe', RecipeController.getRecipe)

module.exports = apiEndpoints