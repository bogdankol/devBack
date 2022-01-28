const jsonwebtoken = require('jsonwebtoken')
const { Unauthorized } = require('http-errors')
const { UserModel } = require('../db/userModel')

const authenticateUser = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Unauthorized('no token provided')
    const [bearer, token] = req.headers.authorization.split(' ')
    if (bearer !== 'Bearer')
      throw new Unauthorized('please, provide a bearer token')
    try {
      const { _id } = await jsonwebtoken.verify(token, process.env.SECRET_KEY)
      const user = await UserModel.findById(_id)
      if (!user || user.token !== token) {
        throw new Unauthorized('Not authorized')
      }
      req.user = user
      next()
    } catch (err) {
      throw new Unauthorized(err.message)
    }
  } catch (err) {

    next(err)
  }
}

module.exports = {
  authenticateUser,
}
