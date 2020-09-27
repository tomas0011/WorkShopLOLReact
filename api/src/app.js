const express = require('express')

// import middlewares
const bodyPaser = require('body-parser')
const morgan = require('morgan')

// config
const server = express()

// import routes
const cardsPath = require('./routes/champ')

// middlewares
server.use(bodyPaser.json())
server.use(morgan("dev"));

// middlewares routes
server.use('/champ', cardsPath)


module.exports = server