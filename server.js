const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})

// Wenn die Login-Seite im Browser aufgerufen wird,...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {   
    // ... dann wird die login.ejs vom Lerver gerendert und an den
    // Browser zurückgegeben:    
    serverAntwort.render('login.ejs', {})
}) 
    // die meineApp.post('login') wird ausgeführt, sobald der Button auf dem Formular gedrückt wird.
meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {   
        serverAntwort.render('index.ejs', {})          
})

