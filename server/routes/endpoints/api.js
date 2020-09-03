const apiEndpoints = require('express').Router()
const PixabayController = require('../../controllers/PixabyController')

apiEndpoints.get('/pixabay', PixabayController.getPixabay)

module.exports = apiEndpoints