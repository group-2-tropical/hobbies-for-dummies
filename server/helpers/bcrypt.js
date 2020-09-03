const bcrypt = require('bcryptjs')

function comparePassword(key, value) {
    return bcrypt.compareSync(key, value)
}

module.exports = { comparePassword };