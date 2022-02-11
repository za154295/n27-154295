// Übungen zu Klasse und Objekt

// Übung 1
// In einem Fußballverein sollen Spieler verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) Das Objekt der realen Welt ist der Spieler. 

// zu b) 

class Spieler{
    constuctor(){
        this.Name
        this.Position
        this.Verein
        this.Nummer
    }
}

// zu c) 
// Es wird nun ein konkreter Spieler mit konkreten Eigenschaftsweten erzeugt. 
// Dazu wird der konkreter Spieler deklariert (=Bekanntgemacht): let spielerMüller
// In einem zweiten Schritt wird der konktrete Spieler instanziiert = new Spieler ()

let spielerMueller = new Spieler()    

// zu d) 
// Es werden konkrete Eigenschaften in den Arbeitsspeicher geschrieben:

spielerMueller.Name = "Thomas Müller"
spielerMueller.Position = "Stürmer"
spielerMueller.Verein = "FCB"
spielerMueller.Nummer = 25
spielerMueller.Alter = 18 

if(spielerMueller.Alter >= 18){
    spielerMueller.Volljaerig = true 
    console.log("Der Spieler " + spielerMueller.Name + " ist volljährig.")
}


console.log(spielerMueller.Name)
console.log(spielerMueller.Position)
console.log("Der Spieler " + spielerMueller.Name + " hat die Nummer " + spielerMueller.Nummer + ".")
console.log()

// Übung 2
// In einem Schulprogramm sollen Zeugnisse verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) Das "Zeugniss" ist das Objekt der realen Welt.

// zu b)

class Zeugnis{
    constuctor(){
        this.SchuelerName
        this.Klasse
        this.Geburtsdatum
        this.Gesamtnote
        this.Fehlstunden
        this.Faecher
    }
}

// zu c) 

let zeugnisPit = new Zeugnis()

// zu d) 

zeugnisPit.PitSchuelerName = "Pit Kiff"
zeugnisPit.Fehlstunden = 100
zeugnisPit.Gesamtnote = 1

zeugnisMax.PitSchuelerName = "max Muster"
zeugnisMax.Fehlstunden = 10
zeugnisMax.Gesamtnote = 2

if(zeugnisMax.Fehlstunden > zeugnisPit.Fehlstunden){
    console.log("Max Muster hat mehr Fehlstunden")
}else{
    console.log("Pitt Kiff hat mehr Fehlstunden")
}



// Übung 3
// In einem Kiosk soll das Sortiment mit verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten






// Übung 4
// Für ein Schulfest sollen alle Stände verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten










