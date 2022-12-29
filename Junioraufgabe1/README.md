# Junior 1: Reimerei

## Lösungsidee

Es werden alle Reimpaare gesammelt. Alle Wörter werden mit alle Wörtern in der Liste mit einander verglichen dabei werden die drei Regeln angewendet.


## Umsetzung

Wir lesen die Textdatei der Liste der Wörter ein und speichern sie als Array. Jedes Wort in dem Array wird mit mit allen Wörtern des Arrays mit einem höheren Index verglichen, um Doppelaufzählungen zu vermeiden (bemühen - glühen, glühen - bemühen). Eine Funktion nimmt die beiden Wörter als Parameter und prüft sie auf die drei Regeln, gibt ein Boolean aus.
Jede Regel wurde als Funktion implementiert. Sie nehmen die beiden Wörter als Parameter und je nachdem ob die Regel erfüllt wird geben sie ein Boolean, true oder false zurück.  
Die Funktion für die Regel 1 nutzt den strikten Gleichheitsoperator um die maßgeblichen Vokalgruppen und was ihnen Folgt zu vergleichen.  
Die Funktion für die Regel 2 schaut ob die Länge des Wortes geteilt durch zwei, größer oder gleich der Länge der maßgeblichen Vokalgruppe ist.  
Die Funktion für die Regel 3 nutzt die endsWith() Methode von JavaScript um zu überprüfen, dass keines der Wörter mit dem anderen Endet. Dabei ist es wichtig die Groß- und Kleinschreibung zu ignorieren.  
Eine weitere Funktion gibt außerdem die maßgebliche Vokalgruppe und alles was ihr folgt zurück. Um die Vokalgruppen zu ermitteln wird eine regular Expression (/[aeiouyäöüÄÖÜ]+[qwrtzpsdfghjklxcvbnmß]*/gi) benutzt. Die regular Expression wählt alle Vokalfolgen (mindestens ein Vokal, dafür das +) und die anhängenden Konsonanten (beliebiger Anzahl dafür das *) aus. Diese werden in einem Array gespeichert. Dabei entspricht ein Element des Arrays einem String der Vokalgruppe und folgenden Konsonanten. Als Vokal definiere ich hier alle herkömmlichen Vokale sowie das y, ä, ö und ü. Die Zeichenfolge kann beliebig viele Konsonanten hinter den Vokalen enthalten, dies ist aber nicht zwingend, da die letzten Buchtaben in einem Wort auch Vokale sein können und ihnen aufgrund dessen kein Konsonant folgt. Anhand der Länge des Arrays kann die maßgebliche Vokalgruppe evaluiert werden. Falls ein Wort keine maßgebliche Vokalgruppe haben sollte gibt die Methode einen leeren String zurück, da die Regel nicht angewandt werden kann. Da dieser String die Länge 0 hat, wird das Wort spätestens bei Regel 2 durchfliegen.  
Die Lösung wurde in JavaScript implementiert und mit NodeJS v16.17.1 getestet. Das Programm nimmt beim Ausführen den Dateipfad der Beispieldatei als Parameter. Ist dieser nicht vorhanden führt dies zu einem Error.

## Beispiele

**reimerei0.txt**  
bemühen - glühen  
Biene - Hygiene  
Biene - Schiene  
Hygiene - Schiene  
Knecht - Recht

**reimerei1.txt**  
Bildnis - Wildnis  
Brote - Note

**reimerei2.txt**  
Epsilon - Ypsilon

**reimerei3.txt**  
Absender - Kalender  
Ansage - Frage  
Ansage - Garage  
Bahn - Zahn  
Bank - Dank  
Baum - Raum  
Bein - Wein  
Bier - Tier  
Bild - Schild  
Bitte - Mitte  
Butter - Großmutter  
Butter - Mutter  
Dame - Name  
Dezember - November  
Dezember - September  
Drucker - Zucker  
Durst - Wurst  
Ermäßigung - Kündigung  
Ermäßigung - Reinigung  
Fest - Test  
Feuer - Steuer  
Fisch - Tisch  
Flasche - Tasche  
Frage - Garage  
Fuß - Gruß  
Gas - Glas  
Gas - Das  
Glück - Stück  
Glas - Das  
Gleis - Kreis  
Gleis - Preis  
Gleis - Reis  
Gruppe - Suppe  
Hand - Land  
Hand - Strand  
Hose - Rose  
Hund - Mund  
Kündigung - Reinigung  
Kanne - Panne  
Kasse - Klasse  
Kasse - Tasse  
Kassette - Kette  
Kassette - Toilette  
Keller - Teller  
Kette - Toilette  
Kind - Rind  
Kind - Wind  
Klasse - Tasse  
Kopf - Topf  
Kreis - Preis  
Kunde - Stunde  
Land - Strand  
Lohn - Sohn  
Magen - Wagen  
Nachmittag - Vormittag  
November - September  
Platz - Satz  
Rind - Wind  
Rock - Stock  
S-Bahn - Zahn  
Sache - Sprache  
See - Tee  
Sekunde - Stunde
