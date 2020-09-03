const router = require('express').Router()
const UserController = require('../controllers/userController')

// router.post('/register', UserController.register)
// router.post('/register', UserController.login)
router.post('/users/googleLogin', UserController.googleLogin)


module.exports = router