const { getAllUsers } = require('./getAllUsers')
const { getUserPosts } = require('./getUserPosts')
const { googleRegistration } = require('./googleRegistration')
const { googleLogin } = require('./googleLogin')
const { saveUserForWork } = require('./saveUserForWork')

module.exports = {
    getAllUsers,
    getUserPosts,
    googleRegistration,
    googleLogin,
    saveUserForWork
}

