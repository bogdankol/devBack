const express = require('express')
const {
    authenticateUser
} = require('../../middlewares')
const cardsRouter = express.Router()
const {
  
} = require('../../controllers')
const {
    errorHandler
} = require('../../helpers')

// cardsRouter.get('/', errorHandler())
// cardsRouter.post('/', authenticateUser, errorHandler())

module.exports = cardsRouter
