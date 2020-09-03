const {OAuth2Client} = require('google-auth-library')
const { generateToken } = require('../helpers/jwt')

class UserController {

    // static untuk google login
    static googleLogin (req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID)
        const { google_token } = req.headers
        const data = {} 

        client.verifyIdToken({
                idToken: google_token,
                audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        })
        .then(ticket => {
            const payload = ticket.getPayload()
            return payload
        })
        .then(payload => {
            
            data.username = payload.name
            data.email = payload.email
            data.password = 'random123'
            
            return User.findOne({where : { email : data.email}})
        })
        .then ( user => {
            if(!user) {
                return User.create(data)
            } else {
                return user
            }
        })
        .then ( user => {
            const access_token = generateToken(user)
            console.log(access_token)
            return res.status(200).json({access_token})
        })
        .catch( err => {
            console.log(err)
            next(err)
        })
    }
}

module.exports = UserController