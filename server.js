const express = require('express')
const server = express()
const router = require('./routes/router')
const Handlebars = require('express-handlebars')

const PORT = process.env.PORT || 3000

server.engine('handlebars', Handlebars.engine({
    defaultLayout: 'layout'
}))


server.set('view engine', 'handlebars')
server.use('/', router)

server.listen(PORT, ()=>{
    console.log(`Physduck is the best duck! PORT: ${PORT}`)
})