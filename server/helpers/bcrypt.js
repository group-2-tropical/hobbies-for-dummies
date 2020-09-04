const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync()

function comparePassword(key, value) {
    return bcrypt.compareSync(key, value)
}

function createHash(password){
    return bcrypt.hashSync(password, salt)
}

function generateRandomPassword(length){
    let dict = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%%^&*()_+\`-={}|:"<>?[]\\;',./'`
    let res = ''

    for(let i = 0; i < length; i++){
        res += dict[Math.floor(Math.random() * dict.length)]
    }

    return res
}

module.exports = { comparePassword, createHash, generateRandomPassword };