const { UserModel } = require('../db/userModel')
const jwt = require('jsonwebtoken')

const googleLogin = async (userData) => {

  try {
    const token = await jwt.sign({
      _id: userData._id
    }, process.env.SECRET_KEY, {expiresIn: '30d'})
    await UserModel.findByIdAndUpdate(userData._id, {token})
    return token
  } catch(err) {
    throw new Error(`error in googleRegistration: ${err.message}`)
  }
}

module.exports = {
    googleLogin
}
