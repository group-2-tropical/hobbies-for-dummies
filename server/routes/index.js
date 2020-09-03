const router = require('express').Router()
const apiEndpoints = require('./endpoints/api')
const authEndpoints = require('./endpoints/auth')
const { authentication, authorization } = require('../middlewares/auth')

router
.get('/api', authentication, apiEndpoints)
.get('/auth', authEndpoints)

module.exports = router;