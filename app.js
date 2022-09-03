const express = require('express')
const path = require('path')
//const morgan = require('morgan')
const indexRoutes = require('./routes')

const app = express()

app.set('name','Servidor')
app.set('port', process.env.PORT || 4000)
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/', (req,res)=>{
    res.render('index')
})
app.use('/api',indexRoutes)


module.exports = app