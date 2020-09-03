const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')

class UserController {
    static async register (req, res) {
        const { email, password } = req.body
        try {
            const user = await User.create({email, password})
            return res.status(201).json({email})
        }
        catch(err) {
            return res.status(500).json({message: "Internal server error"})
        }
    }
    static async login (req, res) {
        const {email, password} = req.body
        try {
            const user = await User.findOne({where: { email }})
            if (!user) {
                return res.status(400).json({message: "Invalid Email"})
                // throw {message: "Invalid Email", statusCode: 400}
            }
            const isValid = comparePassword(password, user.password)
            if(isValid) {
                const access_token = generateToken({email: user.email, id: user.id})
                return res.status(200).json({access_token})
            } else {
                return res.status(400).json({message: "Invalid Password"})
                // throw {message: "Invalid Password", statusCode: 400}
            }
        } catch(err) {
            return res.status(500).json({message: err.message})
            // return next(err)
        }
    }

    // static untuk google login
    // TODO: bikin async-await
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

module.exports = UserController;