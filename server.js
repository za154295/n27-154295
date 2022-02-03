// Programme verarbeiten oft Objekte der Realen Welt. 
// Objekte haben Eigenschaften. 
// In unserem Bankingprogramm interessieren uns Objekte, 
// wie z.B. Kunde, Konto, Filliale, Bankautomat, ...
// Alle Kunden unserer bank haben die selben Eigenschafte, aber
// unterschiedliche Eigenschaftswerte

class Kunde{
    constructor(){
        this.IdKunde
        this.Nachname
        this.Vorname
        this.Kennwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail
    }   
}    

// Von der Kundenklasse wird eine Konkrete Instanz gebildet.

let kunde = new Kunde()

// Die Konkrete Instanz bekommt eigenchaftwerte zugewiesen. 

    kunde.IdKunde = 154295
    kunde.Nachname = "Müller"
    kunde.Vorname = "Pit"
    kunde.kennwort = "123"
    kunde.Kontostand = 
    kunde.Geburtsdatum = "30.01.2005"
    kunde.Mail = "mueller@web.de"




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

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
   
   const idKunde = browserAnfrage.body.IdKunde
   const kennwort = browserAnfrage.body.Kennwort 
   }

   
    console.log("ID des Kunden: " + idKunde)
    console.log("Kennwort des Kunden: " * kennwort)

    if(idKunde == kunde.idKunde {
        serverAntwort.render('index.ejs', {})
   }
   
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

