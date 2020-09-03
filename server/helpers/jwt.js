const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

const generateToken = (user) => jwt.sign(user, secret)

const verifyToken = (token) => jwt.verify(token, secret)

module.exports = { generateToken, verifyToken }