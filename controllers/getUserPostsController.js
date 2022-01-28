const {getUserPosts} = require('../model')
const {NotFound} = require('http-errors')

const getUserPostsController = async(req, res) => {
    const {userId} = req.params
    try {
        const result = await getUserPosts(userId)
        res.status(200).json({result})
    } catch(err) {
        console.log(err.message)
        throw new NotFound('not user found')
    }
    
}

module.exports = {
    getUserPostsController
}