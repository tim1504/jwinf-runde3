# Junior 2: Container

## Lösungsidee

Der schwerste Container muss folgende Bedingung erfülle: Er muss schwerer als alle anderen, als schwerer auf der Paar-Wage gewogenen, Container sein. Dazu schaut man sich an welche Container direkt mit untersuchten Container auf der Paar-Wage standen, leichter als der Container sind. Dies wiederholt man mit den leichteren Containern bis man eine Liste hat mit allen Container, die leichter als der untersuchten Container sind. Findet man in dieser Liste alle, als schwerer auf der Paar-Wage gewogenen, Container vor ist der untersuchte Container der schwerste Container. Klappt dieser Beweis bei keinem Container, kann nicht gesagt werden welcher Container der schwerste ist.


## Umsetzung

Die Hierarchie der Container wird als Graphen dargestellt. Die Kanten des Graphen stellen die Beziehungen zwischen den Container dar. Jeder Container wird untersucht. Mit Breath-First-Search werden alle Container, die leichter als der untersuchte Container sind, ermittelt und von einer Liste, die alle Container, die schwerer auf der Paarwaage gewogen worden sind, abgearbeitet. Werden bei einem untersuchten Container im Prozess alle Elemente von der Liste entfernt ist dies der schwerste Container. Es müsse keine Container weiter überprüft werden.  
Die Lösung wurde in JavaScript implementiert und mit NodeJS v16.17.1 getestet. Das Programm nimmt beim Ausführen den Dateipfad der Beispieldatei als Parameter. Ist dieser nicht vorhanden führt dies zu einem Error.

## Beispiele

**container0.txt**  
Es kann nicht gesagt werden, welcher der schwerste Container ist!

**container1.txt**  
Container 4 ist der schwerste Container!

**container2.txt**  
Es kann nicht gesagt werden, welcher der schwerste Container ist!

**container3.txt**  
Es kann nicht gesagt werden, welcher der schwerste Container ist!

**container4.txt**  
Container 5 ist der schwerste Container!
