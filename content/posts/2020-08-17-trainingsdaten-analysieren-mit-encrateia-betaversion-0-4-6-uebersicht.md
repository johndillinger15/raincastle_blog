---
title: Trainingsdaten analysieren mit Encrateia (Betaversion | 0.4.6) - Übersicht
date: 2020-08-17
---
Im März 2019 [schrieb ich darüber,](https://raincastle.blog/posts/2019-03-25-anforderungen-an-eine-selbst-gebaute-trainingsdokumentations-und-analyse-software/) was eine selbstgebaute Trainigssoftware/-App für mich können muss. Nun ist es soweit und [Stefan](https://www.informatom.com/) hat nun die Betaversion (v 0.4.6) von [Encrateia](https://encrateia.informatom.com) soweit fertig, dass wir sie zum öffentlichen Test bereitstellen können. Solltet ihr Android-User sein, könnt ihr die APK-Files direkt [hier](https://encrateia.informatom.com/download/) herunterladen, für iOS gibt es ein [Testflight-Programm](https://testflight.apple.com/join/RzIM0Yr3). Feedback könnt ihr gerne als Kommentar unter dem Post, im 3-Schweinehunde [Mattermost-Kanal](https://mattermost.informatom.com/signup_user_complete/?id=pniz51hpoiyqumcdeu11463o8h) oder auf der [Gitlab-Seite](https://gitlab.informatom.com/3-schweinehunde/encrateia) geben.

Encra ... WAS?

> [Encrateia](https://de.wikipedia.org/wiki/Enkrateia) kommt von dem Adjektiv enkratês (ἐγκρατής von ἐν (en, "in"), was Besitz, Macht über etwas oder jemand anderen bedeutet + κράτος (krátos, "Macht")). Daraus ergibt sich die Bedeutung von Macht über sich selbst, Macht über die eigenen Leidenschaften und Instinkte, Selbstkontrolle und Selbstbeherrschung. - Enkrateia in Wikipedia

Unsere App soll euch also ermächtigen die Macht über die mit eurem Fitnesstracker gesammelten Daten zu bekommen bzw. zu erhalten. Aktuell kann Encrateia mit .fit Files von verschiedenen Garmin Uhren umgehen ([Kompatibilitätsliste](https://encrateia.informatom.com/compatibility/)). Viele von euch laden ihre Aktivitäten standardmäßig zu Strava hoch, um sie dort zu teilen, zu analysieren, oder ganz einfach weil die Aktivitäten nach einer bestimmten Zeit automatisch wieder von der Laufuhr gelöscht werden, um Platz für neue Aktivitäten zu machen. Da die meisten von euch ein Smartphone besitzen haben wir dafür eine App gebaut.

Um Eure Daten zu erhalten, rufen wir Informationen über einzelne Aktivitäten über die Strava-API ab. Da die .fit-files nur von der Website (und nicht über die API) heruntergeladen werden können, müsst Ihr eure Strava-Anmeldeinformationen ein zweites Mal angeben. Dann könnt Ihr den \[Download von Strava\]-Button auf dem Athletenbildschirm verwenden, um die neuesten Aktivitäten herunterzuladen. Sie werden dann auf dem Handy gespeichert. Dann werden diese .fit-Dateien analysiert und die Daten in einer lokalen SQLite-Datenbank auf dem Gerät gespeichert. Dies dauert einige Zeit, das Parsen ist schnell, aber das Speichern dauert 20 bis 30 Sekunden pro Aktivität. Dies macht eine spätere Analyse jedoch viel schneller und muss nur einmal durchgeführt werden.

Ihr müsst die .fit-Files nicht unbedingt von Strava holen, ihr könnt sie auch direkt von eurer Uhr in die App laden. Erstellt dazu einen Benutzer mit der zweiten Option "Erstellen eines eigenständigen Benutzers". Legt dann die .fit-Files im Dokumentenverzeichnis der Encrateia-App  ab. Ihr könnt die .fit-Files von zB. Garmin Connect über den Batch-Export downloaden. Um die Identifizierung des richtigen Verzeichnisses zu erleichtern, haben wir dort eine Datei mit dem Namen "put\_your\_fit\_files\_here.txt" abgelegt. Abschließend die Schaltfläche „Aus lokalem Verzeichnis importieren“ auf Athleten-Level tappen und die Tracking-Daten werden importiert.

Aktuell bietet die App 3 Level an Analysen an, die ich hier nun kurz vorstellen will. In den nächsten Wochen und Monaten will ich weitere Artikel publizieren um etwas genauer auf die einzelnen Analysemöglichkeiten einzugehen.

## Athleten-Ebene

![](/assets/images/IMG_7197-150x300.jpeg)<br /><br />

Auf Athleten-Ebene befinden sich alle Einstellungsmöglichkeiten (graue Felder). Man kann sein Gewicht eingeben oder über ein .csv-File importieren und seine Puls- und Powerzonen-Schemata konfigurieren. Außerdem befinden sich am Ende der Liste weitere allgemeine Einstellungsfelder, die sich durch die Beschriftung selbst erklären. Der Button unten rechts lädt neue Aktivitäten nach.

Die blauen Buttons am oberen Ende der Liste führen zum Aktivität-Feed und zur Aktivitätsliste. Der Feed zeigt grundlegende Statistiken und die Tags des Laufes an, die Aktivitätsliste zeigt nur eine kompakte Liste der Aktivitäten zur schnellen Navigation an.

Die orangfarbenen Buttons sind die interessanten, denn sie führen zu den eigentlichen Analysen. Sie zeigen die Durchschnittswerte einzelner Läufe über die Zeit. Diese Ansichten sind auch filterbar nach Tags, also nach der Art der Läufe. Werte die hier dargestellt sind, sind: Power, Power Ratio (welcher Anteil der Power wird für den Vortrieb verwendet), Power/Heartrate, Pace, Puls, ECOR (Energy Cost of Running), Stride Ratio (Verhältnis aus Schrittlänge zur vertical oscillation), Speed/Heartrate, Cadence und FTP.

Man kann sich zB das durchschnittliche Verhältnis von Power zur Herzfrequenz der einzelnen Läufe ansehen. Filtert man nun die Liste nach den Grundlagenausdauerläufen kann man sich ansehen, ob man sich in diesem Bereich verbessert hat und mehr Power pro Herzschlag Leisten kann. Auf die weitern Analysen werde ich in anderen Blogartikeln eingehen.

## Aktivitäts-Ebene

![](/assets/images/IMG_7198-152x300.jpeg)<br /><br />

Im Activities Feed kann man durch die einzelnen Läufe navigieren. Man sieht grundlegende Werte des Laufes wie Pace oder Distanz und die Tags. Mit einem Tap auf die Aktivität kommt man in deren Detailansicht.

![](/assets/images/IMG_7199-151x300.jpeg)<br /><br />

Auf der Aktivitätsebene kann man im Prinzip alle Werte die die Uhr aufzeichnen als Graph über die Aktivität ansehen. Dazu wird zu jedem Graph die Standardabweichung, die maximal und minimal-Werte  sowie der Durchschnitt angezeigt. Für Power sieht das zB so aus:

Neben den Werten die aus der Uhr kommen finden sich in der Liste noch ein paar berechnete Werte: die Power Duration Curve des Laufes, Power/Heartrate, ECOR, Speed/Heartrate, Power Ratio, Stride Ratio und das FTP Diagramm (nach Riegel). Außerdem kann man hier die Tags vergeben, das Autotagging wiederholen (dazu später mehr), das .fit File herunterladen, das .fit-File erneut Parsen und die Aktivität löschen.

Eine weitere nützliche und interessante Ansicht sind die Bargraphs. Sie zeigen für die gesamte Aktivität und auch für einzelne Runden an, welchen Anteil man in seinen definierten Trainingszonen verbracht hat. Das schaue ich mir vor allem bei den Grundlagenausdauerläufen und longruns an um zu überprüfen ob ich auch wirklich "langsam genug" gelaufen bin. Da will ich dann 80% grün und blau sehen ;).

![](/assets/images/IMG_4C5BE5225065-1-225x300.jpeg)<br /><br />

Über den hellgrünen Button am oberen Ende der Liste kommt man zur Liste der einzelnen Runden. Die Runden sind die von der Uhr entweder automatisch (meist 1km) oder manuell mit der Lap-Taste erstellten Runden.

## Runden-Ebene

In der Liste sind wieder grundlegende Durschnittswerte aufgeführt, um die Runden auch identifizieren zu können. Ein Tap auf eine Runde führt zur Detailseite der Runde mit ihren Werten.

![](/assets/images/IMG_7200-152x300.jpeg)<br /><br />

Auch eine Runde kann Tags haben, das soll später ermöglichen einzelne Runden eines Intervalltrainings miteinander vergleichen zu können. Während die Graphen auf Aktivitätsebene geglättet werden können (der Grad der Glättung kann in den Einstellungen definiert werden) wird in den Graphen der Runde jeder Messwert dargestellt. Ansonsten kann man sich hier Werte wie Power, Herzfrequenz, Pace, etc. sehr detailliert ansehen. Das ist vor allem nützlich wenn man ein Intervalltraining auswerten will und überprüfen will ob an in den Belastungsintervallen auch immer in der richtigen Zone gelaufen ist. Ist man gerade in der Ansicht einer Runde und sieht sich zB die Power an, kann man durch wischen nach links und rechts zwischen den einzelnen Runden wechseln um sie zu vergleichen.

Bei Fragen oder Anregungen schreibt mir gerne eine eMail oder Kommentiert unter den Beitrag dann kann ich das eine oder andere Thema vielleicht in den nächsten Artikeln aufgreifen.<br /><br />
