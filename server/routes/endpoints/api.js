const apiEndpoints = require('express').Router()
const PixabayController = require('../../controllers/PixabyController')
const JikanController = require('../../controllers/JikanController')

apiEndpoints.get('/pixabay', PixabayController.getPixabay)
apiEndpoints.get('/jikan', JikanController.getJikan)

module.exports = apiEndpoints