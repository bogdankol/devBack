const { getAllUsersController } = require('./getAllUsersController')
const { getUserPostsController } = require('./getUserPostsController')
const { googleAuth } = require('./googleAuth')
const { googleRedirect } = require('./googleRedirect')
const { saveUserForWorkController } = require('./saveUserForWorkController')
const { logoutController } = require('./logoutController')
const { getCurrentUserUsersController } = require('./getCurrentUserUsersController')

module.exports = {
    getAllUsersController,
    getUserPostsController,
    googleAuth,
    googleRedirect,
    saveUserForWorkController,
    logoutController,
    getCurrentUserUsersController
}
