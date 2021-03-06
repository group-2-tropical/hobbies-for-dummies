const router = require('express').Router()
const apiEndpoints = require('./endpoints/api')
const authEndpoints = require('./endpoints/auth')
const { authentication, authorization } = require('../middleware/auth')

router
.use('/auth', authEndpoints)
.use('/api', authentication, apiEndpoints)

module.exports = router;