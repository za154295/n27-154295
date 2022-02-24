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
    kunde.Kennwort = "123"
    kunde.Kontostand = "500"
    kunde.Geburtsdatum = "30.01.2005"
    kunde.Mail = "mueller@web.de"




const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
const cookieParser = require('cookie-parser')
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))
meineApp.use(cookieParser('geheim'))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})


// Die Methonde meineApp.get ('/'...) wird abgearbeitet, wenn wenn
// der Kunde die Indexseite (localhost:3000 bzw.
// n27.herokuapp.com) aufruft.

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {       
    
    // Wenn der Kunde bereits angemeldet ist, soll die 
    // Index-Seite an den Browser gegeben werden.
    // Wenn ein signierter Cookie mit Namen 'istAngemeldetAls' im Browser vorhanden ist, 
    // dann ist die Prüfung wahr und es wird die gerenderte Index-Seite an den Browser
    // zurückgegeben. Anderemgfalls wird die Login-Seite an den Browser gegeben.

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('index.ejs',{})

    }else{

        // Wenn der Kunde noch nicht eingeloggt ist, soll 
        // Loginseite an den Browser zurückgegeben werden

        serverAntwort.render('index.ejs',{
            meldung : ""
        })
    }

    serverAntwort.render('login.ejs', {
        meldung : ""
    })          
})

// Die Methode meineApp('/login'...) wird abgeareitet, sobald
// der Anwender im Login-Formukar auf "Einloggen" klickt.


meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {  
    
    // Die im Browser eingegebene idKunde und Kennwort werden zugewiesen 
    // an die Konstante idKunde und passwort.
   
   const idKunde = browserAnfrage.body.IdKunde
   const kennwort = browserAnfrage.body.Kennwort 
   

   
    console.log("ID des Kunden: " + idKunde)
    console.log("Kennwort des Kunden: " + kennwort)

    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){
        
        serverAntwort.cookie('istAngemeldetAls',JSON.stringify(kunde), {signed: true})
        console.log("Der Cookie wurde erfolgreich gesetzt.")
        
        serverAntwort.render('index.ejs', {})

        // Ein cookie names 'istAngemeldetAls'wird im Browser gesetzt.
        // Der Wert des Cookies ist das i eine Zeichenkette umgewandelte Kunden-Objekt.
        // Der Cookie wird signiert, also gegen Manipulation geschützt.

        

   }else{serverAntwort.render('login.ejs', {
       meldung : "Ihre Zugangsdaten stimmen nicht überein. Geben Sie Bitte die richtigen Daten ein"
   })}

   
})

// Wenn die Login-Seite im Browser aufgerufen wird,...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {   
    // ... dann wird die login.ejs vom Lerver gerendert und an den
    // Browser zurückgegeben:    
    serverAntwort.render('login.ejs', {
        meldung : "Bitte geben sie Ihre Zugangsdaten ein"
    })
}) 


serverAntwort.clearCookie('istAngemeldetAls')


    // die meineApp.post('login') wird ausgeführt, sobald der Button auf dem Formular gedrückt wird.
meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {   
        serverAntwort.render('index.ejs', {})          
})


// require('./Uebungen/ifUndElse')
require('./Uebungen/klasseUndObjekt')
