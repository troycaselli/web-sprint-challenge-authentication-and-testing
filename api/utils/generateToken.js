const jwt = require('jsonwebtoken')

const {JWT_SECRET} = require('../secrets')

const generateToken = (user) => {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '8h'
    }
    return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = {
    generateToken
}