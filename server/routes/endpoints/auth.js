const authEndpoints = require('express').Router()
const UserController = require('../controllers/UserController')

authEndpoints
.post('/register', UserController.register)
.post('/login', UserController.login)
.post('/googleLogin', UserController.googleLogin)

module.exports = authEndpoints;