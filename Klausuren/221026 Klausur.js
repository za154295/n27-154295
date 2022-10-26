console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// 
// Datensicherheit ist das technische Ziel Daten gegen Verlust, Manipulation und andere Bedrohungen zu schützen. 
// Dies gilt für analoge und Digitale Daten.
// 
//
// Datenschutz ist der Schutz von personenbezogenen Daten.
//
//
//
//
// 
// 
// 
// 
// 
// Aufgabe 2 a)
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// 
//
// Symmetrische Verschlüsselung arbeitet mit einem einzelnen Schlüssel der eingegeben werden muss. 
// Dies ist ein einfaches Kennwort, welsches möglichst kryptisch und lang sein sollte. Es ist aber 
// eine ungünstige Methode, wenn man den Key teilen will, da potenzielle angreifen den key abfangen 
// können wenn er auf dem gleichen kanal geteilt wird. 
// 
//
//
//
//
// es gibt einen puplic key und einen privaten key, wobei der private key 
// zum verschlüsseln und der öffentliche key zum entschlüsseln da ist. 
// Vorteil ist, dass man Dateien z.B.
// per Mail versenden kann und diese nicht von einem angreifen eingesehen werden können, jedoch von dem 
// Emfänger geöffnet werden können.
//
// 
// 
// 
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// 
// 
// 
// 
// 
//
//
//
//
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
// 
//
// Deklaration:
// class Klausureigenschaften{
// constructor(){
        // this.Note
        // this.Schüler
//  }
// }


// Instanziierung:
// let schüler = new Schüler()
// 
//
//
// Initialisierung:
// schüler.name = "Schülername"
// schüler.note = "Schülernote"
// schüler.alter = "Geburtsdatum"
//
//
//
//
//
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!

class Zeugniss{
    constructor(){
        this.Deutschnote;
        this.Mathenote;
        this.Englischnote;
        this.Schülervorname;
        this.Schülernachname;
        this.Durchschnitt;
        this.Sonderleistung;
    }
}

// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  

let zeugniss = new Zeugniss ()

zeugniss.Deutschnote = "3";
zeugniss.Mathenote = "2";
zeugniss.Englischnote = "4";
zeugniss.Schülervorname = "Arne";
zeugniss.Schülernachname = "Zender";
zeugniss.Durchschnitt = "3";
zeugniss.Sonderleistung = "Klassensprecher";

// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 


console.log(
    zeugniss.Deutschnote
)   
 
console.log(
   zeugniss.Mathenote
)

console.log(
    zeugniss.Englischnote
)
   
console.log(
    zeugniss.Schülervorname
)

console.log(
    zeugniss.Schülernachname
    )

console.log(
    zeugniss.Durchschnitt
)

console.log(
    zeugniss.Sonderleistung
)

// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
//
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 
// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 
// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"
// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 
// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"


class Schüler2{
    constructor(){
        this.Mathepunkte;
        this.Deutschpunkte;
        this.Englischpunkte;
    }
}

let pit = new Schüler2();
let git = new Schüler2();

pit.Mathepunkte = "15"
pit.Deutschpunkte = "10"
pit.Englischpunkte = "5"

git.Mathepunkte = "10"
git.Deutschpunkte = "8"
git.Englischpunkte = "15"

if(pit.Mathepunkte > git.Mathepunkte){
    console.log("Pit hat die höhere Durschschnittsnote")
}else{
    console.log("Git hat die höhere Durschschnittsnote")

if(pit.Deutschpunkte > git.Deutschpunkte){
    console.log("Pit hat die höhere Durschschnittsnote")
}else{
    console.log("Git hat die höhere Durschschnittsnote")
 
if(pit.Englischpunkte > git.Englischpunkte){
    console.log("Pit hat die höhere Durschschnittsnote")
}else{
    console.log("Git hat die höhere Durschschnittsnote")

    