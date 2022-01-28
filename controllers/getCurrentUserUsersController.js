const { BadRequest } = require('http-errors')
const { UserModel } = require('../db/userModel')
const { CardsModel } = require('../db/cardsModel')

const getCurrentUserUsersController = async (req, res) => {
    try {
        const usersArray = await CardsModel.findOne({ owner: req.user._id })
        const userInfo = await UserModel.findById(req.user._id)
        console.log(userInfo)
        if(!usersArray) return res.status(200).json({userInfo})
        res.status(200).json({data: usersArray, userInfo})
    } catch (err) {
        throw new BadRequest(`error occured: ${err.message}`)
    }
    
}

module.exports = {
    getCurrentUserUsersController
}