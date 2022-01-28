const {
  UserModel
} = require('../db/userModel')
const jwt = require('jsonwebtoken')


const googleRegistration = async (email, name, picture) => {
  console.log('--------------------', picture)
  try {
    const newUser = new UserModel({
      email,
      name,
      avatarURL: picture
    })
    const user = await newUser.save()
    const token = await jwt.sign({
      _id: user._id
    }, process.env.SECRET_KEY, {
      expiresIn: '30d'
    })
    user.token = token
    await user.save()
    return user
  } catch (err) {
    throw new Error(`error in googleRegistration: ${err.message}`)
  }
}

module.exports = {
  googleRegistration
}