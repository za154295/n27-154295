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
        this.Geburtsdatum
        this.Mail
        this.Telefonnummer
    }   
}    

// Von der Kundenklasse wird eine Konkrete Instanz gebildet.

let kunde = new Kunde()

// Die Konkrete Instanz bekommt Eigenschaftwerte zugewiesen. 

kunde.IdKunde = "154295"
kunde.Nachname = "Müller"
kunde.Vorname = "Pit"
kunde.Kennwort = "123"
kunde.Kontostand = "500"
kunde.Geburtsdatum = "30.01.2005"
kunde.Mail = "mueller@web.de"
kunde.Telefonnummer = "0123456789"

//------------------------------------------

class Kundenberater{
    constructor(){
        this.IdBerater
        this.Nachname
        this.Vorname
        this.Filiale
        this.Mail
        this.Telefonnummer
    }
}

let kundenberater = new Kundenberater()

kundenberater.IdBerater = "234567"
kundenberater.Nachname = "Gärtner"
kundenberater.Vorname = "Manuel"
kundenberater.Filiale = "Borken-Weseke"
kundenberater.Mail = "gaertner@n27.com"
kundenberater.Telefonnummer = "987654321"

//-------------------------------------------

class Konto{
    constructor(){
        this.Kontostand
        this.Iban
        this.Art
        this.Pin
    }   
}

let konto= new Konto()

konto.Kontostand = 670,53
konto.Iban = "DE48 1234 5678 9010 1112 13"
konto.Art = "Tagesgeldkonto"
konto.Kennwort = ""

//-------------------------------------------

class Kredit{
    constructor(){
        this.Zinssatz
        this.Laufzeit
        this.Betrag
    }

    // eine Funktion berechnet etwas. Im Namen der Funktion steht also immer ein Verb.

    berechneGesamtkostenKreditNachEinemJahr(){
        return this.Betrag * this.Zinssatz / 100 + this.Betrag
    }
}




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

        serverAntwort.render('login.ejs',{
            meldung : ""
        })
    }
    

       
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

    // Browser zurückgegeben:   

    
    serverAntwort.clearCookie('istAngemeldetAls')

    serverAntwort.render('login.ejs', {
        meldung : "Bitte geben sie Ihre Zugangsdaten ein"
    })
}) 





//require('./Uebungen/ifUndElse')
//require('./Uebungen/klasseUndObjekt')

//require('./Klausuren/220118klausur2')

// Wenn der anmelde cookie gestezt ist, wird der Nutzer zur 
// about-Seite gelenkt.


meineApp.get('/about',(browserAnfrage, serverAntwort, next) => {   

    if(browserAnfrage.signedCookies['istAngemeldetAls']){

        serverAntwort.render('about.ejs',{})
    
    }else{
        serverAntwort.render('login.ejs',{
            meldung : ""
        })
    }
}) 


meineApp.get('/profile',(browserAnfrage, serverAntwort, next) => {       
    serverAntwort.render('profile.ejs', {
        vorname: kunde.Vorname,
        nachname: kunde.Nachname,
        mail: kunde.Mail,
        geburtsdatum: kunde.Geburtsdatum,
        telefonnummer: kunde.Telefonnummer,
        kennwort: kunde.Kennwort,
        idKunde: kunde.IdKunde,
        Erfolgsmeldung:""
        
    })
}) 

// Sobald der Speichern-Button auf der Profile Seite gedrückt wird, 
// wird die meineApp.post('profile'...) abgearbeitet.

meineApp.post('/profile',(browserAnfrage, serverAntwort, next) => {     
    
    // Die Erfolgsmeldung für das speichern der geänderten ein
    // Profildaten wird in eine lokale Variable namens
    // erfolgsmeldung gespeichert.

    let erfolgsmeldung = ""

    // Die im Browser eingegebenen Werte werden an den Server
    // übermittelt und in konstante gespeichert.

    if(kunde.Mail != browserAnfrage.body.Mail){

        // Wenn der Wert der Eigenschaft von kunde.Mail abweicht
        // vom Wert der Eigenschaft Mail aus dem Browser-Formular
        // dann wird die Erfolgsmeldung initialisiert:

        erfolgsmeldung = erfolgsmeldung + "Änderung der Mail erfolgreich."
        kunde.Mail = browserAnfrage.body.Mail
        console.log(erfolgsmeldung)
    }

    if(kunde.Telefonnummer != browserAnfrage.body.Telefonnummer){


        erfolgsmeldung = erfolgsmeldung + "Änderung der Telefonnummer erfolgreich."
        kunde.Telefonnummer = browserAnfrage.body.Telefonnummer
        console.log(erfolgsmeldung)
    }

    if(kunde.IdKunde != browserAnfrage.body.IdKunde){


        erfolgsmeldung = erfolgsmeldung + "Änderung der Kunden ID erfolgreich."
        kunde.IdKunde = browserAnfrage.body.IdKunde
        console.log(erfolgsmeldung)
        }

    if(kunde.Kennwort != browserAnfrage.body.Kennwort){


        erfolgsmeldung = erfolgsmeldung + "Änderung des Kennwortes erfolgreich."
        kunde.Kennwort = browserAnfrage.body.Kennwort
        console.log(erfolgsmeldung)
        }
    
    kunde.Geburtsdatum = browserAnfrage.body.Geburtsdatum
    kunde.Kennwort = browserAnfrage.body.Kennwort
    kunde.Telefonnummer = browserAnfrage.body.Telefonnummer

     console.log("Profil gespeichert.")
    

     serverAntwort.render('profile.ejs', {
        vorname: kunde.Vorname,
        nachname: kunde.Nachname,
        mail: kunde.Mail,
        geburtsdatum: kunde.Geburtsdatum,
        telefonnummer: kunde.Telefonnummer,
        kennwort: kunde.Kennwort,
        idKunde: kunde.IdKunde,
        Erfolgsmeldung: erfolgsmeldung

    })
}) 



meineApp.get('/support',(browserAnfrage, serverAntwort, next) => { 
  

    if(browserAnfrage.signedCookies['istAngemeldetAls']){

        serverAntwort.render('support.ejs',{
            vorname: kundenberater.Vorname,
            nachname: kundenberater.Nachname,
            idberater: kundenberater.IdBerater,
            mail: kundenberater.Mail,
            filiale: kundenberater.Filiale,
            telefonnummer: kundenberater.Telefonnummer    
        })
    
    }else{
        serverAntwort.render('login.ejs',{
            meldung : ""
        })
    }
}) 





meineApp.get('/kontostandAnzeigen',(browserAnfrage, serverAntwort, next) => {     

        if(browserAnfrage.signedCookies['istAngemeldetAls']){
            serverAntwort.render('kontostandAnzeigen.ejs',{
                meldung : ""
            })
        }else{
            serverAntwort.render('login.ejs', {
            meldung : ""
        })  
    }
})



meineApp.get('/zinsBerechnen',(browserAnfrage, serverAntwort, next) => {     

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('zinsBerechnen.ejs',{
            meldung : ""
        })
    }else{
        serverAntwort.render('login.ejs', {
        meldung : ""
    })  
}
})


require('./Klausuren/221026 Klausur.js')



