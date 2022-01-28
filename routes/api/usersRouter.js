const express = require('express')
const {
  authenticateUser
} = require('../../middlewares')
const usersRouter = express.Router()
const {
  getAllUsersController,
  getUserPostsController,
  googleAuth,
  googleRedirect,
  saveUserForWorkController,
  logoutController,
  getCurrentUserUsersController
} = require('../../controllers')
const {
    errorHandler
} = require('../../helpers')

usersRouter.get('/', errorHandler(getAllUsersController))
usersRouter.get("/:userId/posts", errorHandler(getUserPostsController));
usersRouter.post("/saveUserForWork", authenticateUser, errorHandler(saveUserForWorkController));
usersRouter.get("/current", authenticateUser, errorHandler(getCurrentUserUsersController));
usersRouter.get('/logout', authenticateUser, logoutController)
usersRouter.get("/google", errorHandler(googleAuth));
usersRouter.get("/google-redirect", googleRedirect);

module.exports = usersRouter
