const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const usersRouter = require('./routes/api/usersRouter')
const cardsRouter = require('./routes/api/cardsRouter')

const app = express()
require('dotenv').config()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/cards', cardsRouter)


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message })
})

module.exports = app
