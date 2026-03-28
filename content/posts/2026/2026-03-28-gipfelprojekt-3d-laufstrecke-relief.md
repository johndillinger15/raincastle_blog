---
title: Mein Gipfelprojekt bekommt eine neue Dimension
date: 2026-03-28T20:00:00Z
---

Vor gut einem Monat ist in unseren Haushalt ein 3D-Drucker eingezogen, natürlich wird seitdem 24/7 gedruckt… Der Wunsch kam ausnahmsweise nicht von mir, sondern unser großer Sohn (6 Jahre) lag uns seit 2 Monaten in den Ohren, dass wir uns doch einen 3D-Drucker kaufen sollten. Keine Ahnung, wo er es aufgeschnappt hat, jedenfalls gaben wir diesem Wunsch letztendlich nach und holten uns einen Bambu Lab A1 3D-Drucker.

Nach den ersten Testdrucken und nachdem wir uns für den richtigen Standort entschieden hatten (im Keller!), ging es dann auch mit den ersten größeren Modellen los. Das erste Highlight war ein Würfelturm für unsere epischen [Dungeonschlachten](https://amzn.to/4rXLLvu). Bald fielen mir aber auch die vielen Drucke mit Laufbezug auf Makerworld ins Auge. Zuerst nur die Medaillenhalter, dafür hatte ich ja schon eine Lösung, dann aber auch die Möglichkeit, seine Wettkämpfe als Route oder Relief zu drucken. Das musste ich natürlich gleich ausnutzen und habe dadurch mein Finisher Board etwas aufgemotzt.

[<img src='/assets/images/2026/finisher_board.jpg' class='w-4/5' align='center' />](/assets/images/2026/finisher_board.jpg)<br><br>

Als ich dann dabei war, die Waben für die (Halb-)Marathons zu drucken, kam mir der Gedanke, dass das ja eigentlich ideal für mein Peaks-Projekt wäre, denn ich könnte jeden Lauf mit einem neuen Gipfel als Relief auf eine solche Kachel drucken. Also schrieb ich ein Python-Script, das echte Satelliten-Höhendaten für das gesamte Gebiet der Kachel lädt, daraus eine realistische Geländeoberfläche berechnet und die Höhenunterschiede so skaliert, dass sie auf der gedruckten Wabe gut zur Geltung kommen, dynamisch angepasst an jeden einzelnen Lauf und seine Umgebung. Die Laufstrecke wird als farbiges Band auf dem Gelände abgebildet, Gipfel in der Nähe (bis 250m) des Tracks werden automatisch aus der OpenStreetMap-Datenbank erkannt und als kleine Sternmarkierungen auf der Karte platziert. Am Rand der Wabe erscheinen Infos wie Datum, höchster Punkt und Gipfelnamen, das wird alles automatisch aus der GPX-Datei extrahiert.

Das Ergebnis ist eine Datei, die direkt in Bambu Studio geöffnet werden (.3mf) und sofort gedruckt werden kann. Drei Größen stehen zur Wahl: 10, 12,5 oder 15 cm.

[<img src='/assets/images/2026/wand1.jpg' class='w-4/5' align='center' />](/assets/images/2026/wand1.jpg)<br>
[<img src='/assets/images/2026/wand2.jpg' class='w-4/5' align='center' />](/assets/images/2026/wand2.jpg)<br><br>

Natürlich bin ich kein Profi-Entwickler, und nach den ersten Versuchen wollte ich schon fast aufgeben. Aber nach vielen Iterationen und Testdrucken ist aus einer spontanen Idee ein ausgereiftes Tool geworden, das für mein Gipfel-Projekt zuverlässig Erinnerungen produziert. Optional kann ich die Labels komplett anpassen oder auf der Rückseite Vertiefungen für Magnete oder einen Nagel hinzufügen. Das Script erzeugt zwar viele "manifold edges" aber das regelt der Slicer.

Jetzt haben meine Frau und ich uns gedacht, dass vielleicht nicht nur ich gerne solche Waben hätte, sondern vielleicht auch ihr. Deshalb haben wir einen kleinen Shop aufgesetzt. Alles was ihr braucht, ist die GPX-Datei eures Laufs, den Rest übernehmen wir. Innerhalb weniger Tage habt ihr eure persönliche Geländekachel bei euch zuhause. Schaut gerne mal rein, oder schreibt mir für einen Rabatt-Code.

[Shop](https://relief-manufaktur.de/) - [Instagram](https://www.instagram.com/relief.manufaktur)

<br> <br>
