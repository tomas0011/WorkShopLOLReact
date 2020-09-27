const express = require('express')

// import middlewares
const bodyPaser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

// config
const server = express()

// import routes
const cardsPath = require('./routes/champ')

// middlewares
server.use(bodyPaser.json())
server.use(morgan("dev"));
server.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
    allowedHeaders: "Origin, X-Requested-With, Content-Type, X-Auth-Token, X-PINGOTHER, Accept",
    methods: "GET,HEAD,PUT,PATCH,OPTIONS,POST,DELETE"
}))

// middlewares routes
server.use('/champ', cardsPath)


module.exports = server