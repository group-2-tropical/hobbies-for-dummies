const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = async (req, res, next) => {
    const { access_token } = req.headers
    try {
        const userData = verifyToken(access_token)
        let user = await User.findOne({where: {email: userData.email}})
        if (user) {
            req.userData = userData
            next();
        } else {
            return res.status(401).json({message: 'User not authenticated'})
            // throw { message: 'User not authenticated', statusCode: 401 }
        }
    }
    catch(err) {
    return res.status(500).json({message: 'Internal server error'})
        // return next(err)
    }
}

const authorization = async (req, res) => {
    
}

module.exports = {authentication, authorization}