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
}

module.exports = UserController;