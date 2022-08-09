const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userCtrl = {
    // Create a new user with default
    register: async (req, res) => {
        try {
            const {name, email, password} = req.body;

            const user = await Users.findOne({email}) // Wait until database query for particular email is finished
            if (user) return res.status(400).json({msg: 'The email already exists.'}) // Check if the email is already in database

            if (password.length < 6) // Check if password is more than 6 characters
                return res.status(400).json({msg: 'Password is less than 7 characters long.'})

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            // Create a new user
            const newUser = new Users({
                name, email, password: passwordHash
            }) 
            
            // Save new user to MongoDB
            await newUser.save()

            // Create jsonwebtoken and authentication
            const accessToken = createAccessToken({id: newUser._id})
            const refreshToken = createRefreshToken({id: newUser._id})

            res.cookie('refreshtoken', refreshToken, {
                httpOnly: true,
                path: '/user/refresh_token'
            })

            res.json({accessToken})

        }catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
    // Authorize user if credential is valid
    login: async (req, res) => {
        try {
            const {email, password} = req.body;

            const user = await Users.findOne({email})
            if (!user) return res.status(400).json({msg: 'User does not exist.'})

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({msg: 'Incorrect password.'})

            // If login is successful, create access token and refresh token
             // Then create jsonwebtoken to authentication
            const accessToken = createAccessToken({id: user._id})
            const refreshToken = createRefreshToken({id: user._id})

            res.cookie('refreshtoken', refreshToken, {
                httpOnly: true,
                path: '/user/refresh_token'
            })

            res.json({
                status: 'Success',
                accessToken: accessToken
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
    // Clear user token
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({msg: 'Logged out.'})
        } catch (err) {
            return res.status(500).json({msg: 'Please Login or Register.'})
        }
    },
    
    // Renew user token
    refreshToken: (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken;
            if (!rf_token) return res.status(500).json({msg: 'Please Login or Register.'})
            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) return res.status(500).json({msg: 'Please Login or Register.'})
                const accessToken = createAccessToken({id: user.id})
                res.json({user, accessToken})
            })
            //res.json({rf_token})
        } catch (err) {
            return res.status(500).json({msg: error.message})
        }
    },
    
    // Get particular user, then show
    getUser: async (req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('-password');
            if (!user) return res.status(400).json({msg: 'User does not exist.'})
            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: error.message})
        }
    }
}

// Validity of user access tokens

const createAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}

const createRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCtrl
