const apiEndpoints = require('express').Router()
const PixabayController = require('../../controllers/ApiPixabayController')
const JikanController = require('../../controllers/ApiJikanController')

apiEndpoints.get('/pixabay', PixabayController.getPixabay)
apiEndpoints.get('/jikan', JikanController.getJikan)

module.exports = apiEndpoints