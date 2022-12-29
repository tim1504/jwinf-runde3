//
//  Junior 2    Container
//  Tim Himmelsbach
//

//Für das einlesen von Dateien
const fs = require('fs');

//Einlesen und "formatieren" der Datei als Array
const containerWaage = fs.readFileSync(process.argv[2]).toString().trim().split(/\s+/);

//Erstellen einer neue Map
const schwererAls = new Map();

//Den schwereren Container als Schlüssel speichern
//Den leichteren Container als Wert im mit dem Schlüssel assoziierten Array speichern
for(let i = 0; i < containerWaage.length; i += 2) {

    let schwererContainer = parseInt(containerWaage[i]);
    let leichtererContainer = parseInt(containerWaage[i+1]);

    //Es wird geprüft ob der schwerere Container schon in der Map als Schlüssel existiert um Überschreibungen zu vermeiden
    if(schwererAls.get(schwererContainer) === undefined) {
        //Exestiert er nicht wird ein neuer Eintrag in der Map erstellt
        schwererAls.set(schwererContainer, []);
    }
    //Der leichtere Container wird dem schwereren Container untergeordnet
    schwererAls.get(schwererContainer).push(leichtererContainer);

}

schwersterContainer();

function schwersterContainer() {
    //Testet alle potenziell schwersten Container 
    for(const [untersuchterContainer,leichtereContainer] of schwererAls) {
        //Liste aller als schwerer gewogenen Container
        let schwersteContainer = new Set(schwererAls.keys());
        schwersteContainer.delete(untersuchterContainer);
        let queue = leichtereContainer;
        while(schwersteContainer.size && queue.length) {
            //Neue queue mit allen Kind-Elemente der Container
            let newQueue = [];
            for(const container of queue) {
                //Container wird aus der Liste entfernt, da nun bekannt ist,
                //dass er nicht schwerer als der Untersuchte Container ist
                schwersteContainer.delete(container)
                for(const containerKind of schwererAls.get(container) || []) {
                    if(!newQueue.includes(containerKind)) {
                        newQueue.push(containerKind);
                    }
                }
            }
            queue = [...newQueue];
        }
        if(!schwersteContainer.size) {
            //Der schwerste Container wurde gefunden
            console.log('Container ' + untersuchterContainer + ' ist der schwerste Container!');
            return;
        }
    }
    console.log('Es kann nicht gesagt werden, welcher der schwerste Container ist!');
}