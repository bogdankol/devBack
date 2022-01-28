const {UserModel} = require('../db/userModel')

const logoutController = async (req, res) => {
    await UserModel.findByIdAndUpdate(req.user._id, {
        token: null
    })
    res.status(200).json({message: 'logged out'})
  }

module.exports = {
    logoutController
}