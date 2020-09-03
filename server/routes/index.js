const router = require('express').Router()
const UserController = require('../controllers/UserController')
const {authentication, authorization } = require('../middlewares/auth')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

module.exports = router;