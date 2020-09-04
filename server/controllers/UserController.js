const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { comparePassword, createHash, generateRandomPassword } = require('../helpers/bcrypt')

class UserController {
    static async register(req, res, next) {
        try {
            const userData = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
            console.log(userData);
            const user = await User.create(userData)

            const { id, username, email } = user

            return res.status(201).json({ id, username, email })
        }
        catch (err) {
            return next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ where: { username } })
            const isValid = comparePassword(password, user.password || '')

            if (user && isValid) {
                const access_token = generateToken({ email: user.email, id: user.id })

                return res.status(200).json({ access_token })
            } else {
                throw { code: 401, message: `Oops! Wrong username or password!` }
            }
        } catch (err) {
            return next(err)
        }
    }

    // static untuk google login
    static async googleLogin(req, res, next) {
        try {
            const client = new OAuth2Client(process.env.CLIENT_ID)
            const { google_token } = req.headers

            const payload = await client.verifyIdToken({
                idToken: google_token,
                audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            })
                .getPayload()

            const data = {
                username: payload.name,
                email: payload.email,
                password: createHash(generateRandomPassword(15))
            }

            let user = User.findOne({ where: { email: data.email } })

            if (!user) {
                user = User.create(data)
            } else {
                const access_token = generateToken(user)

                return res.status(200).json({ access_token })
            }
        }
        catch (err) {
            return next(err)
        }
    }
}

module.exports = UserController;