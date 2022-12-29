//
//  Junior 1   Reimerei
//  Tim Himmelsbach
//

//Für das einlesen von Dateien
const fs = require('fs');

//Einlesen und "formatieren" der Wortliste als Array
const woerter = fs.readFileSync(process.argv[2]).toString().split(/\s+/);

//Über alle einzigartigen Wortpaare iterieren
for (let i = 0; i < woerter.length; i++) {
    for (let k = i + 1; k < woerter.length; k++) {
        if (reimenSich(woerter[i], woerter[k])) {
            //Falls sich die Wörter reimen wird das Reimpaar auf die Kosole ausgegeben 
            console.log(woerter[i] + ' - ' + woerter[k]);
        }
    }
}

//Überprüft ob sich die zwei Wörter reimen
function reimenSich(wort1, wort2) {
    return gleicheVokalgruppe(wort1, wort2) && haelfteDerBuchstaben(wort1, wort2) && endetNichtMitWort(wort1, wort2);
}

//Überprüft ob die beiden Wörter die selben massgebliche Vokalgruppe und was ihr folgt haben
function gleicheVokalgruppe(wort1, wort2) {
    return (massgeblicheVokalgruppe(wort1) === massgeblicheVokalgruppe(wort2));
}

//Überprüft ob die massgebliche Vokalgruppe und was ihr folgt mindestens 50% der Buchtaben des Wortes ausmacht 
function haelfteDerBuchstaben(wort1, wort2) {
    return (massgeblicheVokalgruppe(wort1).length >= 0.5 * wort1.length && massgeblicheVokalgruppe(wort2).length >= 0.5 * wort2.length);
}

//Überprüft ob ein Wort mit dem komplett anderen Wort endet 
function endetNichtMitWort(wort1, wort2) {
    return (!wort1.toLocaleLowerCase().endsWith(wort2.toLocaleLowerCase()) && !wort2.toLocaleLowerCase().endsWith(wort1.toLocaleLowerCase()));
}

//Gibt die massgebliche Vokalgruppe und was ihr folgt eines Wortes zurück
function massgeblicheVokalgruppe(wort) {
    let vokalgruppen = wort.match(/[aeiouyäöüÄÖÜ]+[qwrtzpsdfghjklxcvbnmß]*/gi) || [''];
    if (vokalgruppen.length < 2) {
        return vokalgruppen[0];
    }
    vokalgruppen.splice(0, vokalgruppen.length - 2);
    return vokalgruppen.join('');
}