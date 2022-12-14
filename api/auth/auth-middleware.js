const db = require('../../data/dbConfig');

const checkCredentialsExist = (req, res, next) => {
    const {username, password} = req.body

    if(!username || !password) {
        next({status: 400, message: 'username and password required'})
    } else {
        next()
    }
}

const checkUniqueUsername = async (req, res, next) => {
    const {username} = req.body
    const existing = await db('users').where({username}).first()
    if(!existing) {
        next()
    } else {
        next({status: 400, message: 'username taken'})
    }
}

const checkValidCredentials = (req, res, next) => {
    next()
}

module.exports = {
    checkCredentialsExist,
    checkUniqueUsername,
    checkValidCredentials
}