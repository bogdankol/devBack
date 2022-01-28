const {getAllUsers} = require ('../model')
const {BadRequest} = require('http-errors')

const getAllUsersController = async (req, res) => {

    try {
        const result = await getAllUsers()
        res.status(200).json({result})
    } catch(err) {
        console.log(err.message)
        throw new BadRequest('we got some problems with server. Plese try again later')
    }
    
}

module.exports = {
    getAllUsersController
}