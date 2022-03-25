const express = require('express')
const router = express.Router()
const monsterRoutes = require('./api/monsterRoutes')

router.use(express.static('public'))
router.use('/monsters', monsterRoutes)

router.get('/', (req, res)=>{
    res.render('home', {
        title: 'Home',
        name: 'The Monster Codex!'
    })
})

router.get('*', (req, res)=>{
    if (req.url == '/favicon.ico') {
        res.end()
    } else {
        res.render('404', {
            layout: false,
            title: '404 Error - I can has web page?',
            name: '404 Error'
        })
    }
})

module.exports = router