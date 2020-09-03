const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync()

function comparePassword(key, value) {
    return bcrypt.compareSync(key, value)
}

function createHash(password){
    return bcrypt.hashSync(password, salt)
}

module.exports = { comparePassword, createHash };