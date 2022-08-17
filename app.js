const express = require('express')
const app = express()
const morgan = require('morgan')
const indexRoutes = require('./routes')

app.set('name','Servidor')
app.set('port', process.env.PORT || 4000)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api',indexRoutes)


module.exports = app