---
title: Anforderungen an eine selbst gebaute Trainingsdokumentations und -analyse Software
date: 2019-03-25
---

Ich komme gerade von der _Subscribe10_, DER deutschen Podcasterkonferenz. Dort traf ich unter anderem die 3 Schweinehunde, darunter auch <a href='https://www.informatom.com/' class='external' target='_blank' rel='noopener'>Stefan</a>, seineszeichens Podcaster und Softwareentwickler. Als wir Sonntags gegen Ende der Konferenz zusammensaßen (diesmal ohne Bier) und uns über die Fortschritte des Lauftrainings unterhielten kamen wir auch auf die Analyse der Trainingsdaten und welchen Aufwand jeder dafür so betreibt. Ich erzählte im dann von meiner Exceltabelle (Ausschnitt siehe Coverbild), die ich seit 10 Jahren pflege und die nun beachtliche Ausmaße angenommen hat. Allerdings erntete ich bei Stefan nur Kopfschütteln, warum ich denn das alles manuell machen würde und diese Berechnungen und Analysen keinem Computer überlasse - fair point!

Nun ja - die Exceldatei ist unkompliziert und zur Not kann man sich alles ausdrucken :) (beste Datensicherung). Man ist sicher vor plattformwechseln oder -sterben und braucht keine Programmierkenntnisse, nur ein bisschen Mathe. Als Stefan dann meinte, dass er sowas ja als Web-App bauen könnte, versprach ich ihm, dass ich diesen Blogpost schreiben werde um einfach mal alles aufzulisten, was ich mir für so eine Trainingsauswertung vorstelle bzw benötige.

## Mein aktueller Workflow in der Trainingsanalyse

Dazu will ich aber erstmal kurz erläutern, wie mein aktueller Workflow der Trainingsanalyse aussieht.

### Trainingstagebuch

Ich gehe laufen und zeichne das Training mit meiner Garmin FR935 auf, dabei werden Distanz, Puls, Power und Pace aufgezeichnet. Nach dem Lauf werden die Daten von Garmin Connect nach Strava, TrainingPeaks (incl WKO4), Smashrun und ConnectStats verteilt. Nun geht der Spaß los...

Ich öffne TrainingPeaks (free Version, ich will keine 20€/Monat dafür zahlen) und übertrage Distanz, Zeit, Pace, Avg HFQ, Avg Pace und TSS in meine Excel-Datei. Daraus berechne ich die Laufeffizienz (nur für GA1-Läufe wirklich sinnvoll), CTL, ATL und TSB. In TrainingPeaks schaue ich mir auch die Power an und ob ich in den richtigen Trainingsbereichen trainiert habe. Dann wähle ich aus einer Dropdown Liste den getragenen Schuh aus um die gelaufenen Kilometer pro Schuh in einer Pivottabelle im Auge zu haben. Außerdem erstelle ich mir den Performance Management Chart (PMC). Die einzige Sache die ich NUR aus TrainingPeaks bekomme ist aktuell der TSS.

### Trainingsanalyse

Mittlerweile habe ich alle weiteren Analysen die ich mache in eine 2. Excel-Tabelle ausgelagert ;).

Dort schaue ich mir die wöchentliche Trainingsbelastung in TSS an und überwache so meine Periodisierung. In einem anderen Sheet fasse ich die monatlich und jährlich gelaufenen Kilometer zusammen, inklusive Balkendiagrammen. Für eine grobe Analyse der Trainingsbereiche habe ich in einem anderen Sheet eine Pivottabelle angelegt und daraus ein Tortendiagramm gebastelt welches mir anzeigt wie sich das Training in die einzelnen Bereiche verteilt. Das ist leider nur eine Abschätzung, da ich nur das Training als ganzes und nicht auch wie bei einem Intervalltraining unterschiedliche Bereiche erfassen kann.

Am Ende gibt es noch 2 weitere Analyseseiten. Zum einen analysiere ich die Intervalltrainings etwas genauer. Ich extrahiere mir für jedes einzelne Intervall aus den Daten die Avg Power, Pace und errechne mir die Laufeffizienz, das vergleiche ich dann mit anderen, früheren Einheiten des selben Typs um zu sehen ob ich mich verbessern konnte. Solch eine Funktion habe ich bisher noch nirgends gefunden. Außerdem habe ich noch eine weitere Tabelle zur Abschätzung meiner möglichen Wettkampfzeiten über 10 und 21 km, basierend auf früheren Wettkämpfen und meiner aktuellen FTP.

Leider kann ich nicht alles in einer Exceltabelle oder einem Programm abbilden. WKO4 kommt dem schon sehr nahe, aber leider hab ich noch immer nicht herausgefunden, warum die TSS Werte zwischen WKO4 und Trainingpeaks, vor allem bei Intervalltrainings, so unterschiedlich sind. Dadurch kann ich WKO4 eigentlich nicht für Sachen benutzen die auf TSS basieren. WKO4 dient mir aber zum einen dazu die aktuelle FTP mittels der Power Duration Curve zu ermitteln und auch Trends der FTP zu überwachen. Zum anderen kann ich hier ermitteln, wie lange ich mich wirklich in den einzelnen Trainingszonen aufgehalten habe und das für jeden gewünschten Zeitraum (Wochen, Monate, letzte 90 Tage, letzte 365 Tage).

Kommen wir zu Smashrun. Smashrun benutze ich eigentlich nur dazu um mein jährliches Kilometerziel im Auge zu behalten. Man kann es dort eingeben und sie haben eine sehr schöne graphische Darstellung dessen. Man sieht immer wie viel man hinterher oder voraus ist. Leider enthält der Graph nur das aktuelle Jahr und man kann das aktuelle Jahr nicht mit früheren Jahren vergleichen. Deswegen benutze ich noch die iPhone App ConnectStats. Hier gibt es eine schöne Übersicht über den Lauffortschritt des aktuellen im Vergleich mit den letzten Jahren.

### Trainingsplanung

Ein weiteres Feld, welches im letzen Jahr noch Einzug in meine Exceldatei genommen hat ist die Trainingsplanung. Ich habe schon immer den Trainingsplan für einen bestimmten Wettkampf in meine Exceldatei eingetragen, einfach um den Überblick zu behalten. Seit letztem Jahr rechne ich aber auch die TSS dazu aus und versuche so die Periodisierung und die Trainingsbelastung im vorhinein besser zu Steuern. Dazu habe ich in einem weitern Blatt der Exceltabelle alle Trainingseinheiten eingetragen die ich so mache und dazu die Kilometer, Wattbereiche der Kerneinheiten und TSS aufgelistet. Dies kann ich dann über einen S-Verweis in mein Trainingstagebuch übernehmen und ich sehe sofort im PMC ob das alles Sinn macht und gut aussieht. Die errechneten TSS Werte stimmen auch sehr gut mit den Werten überein, die Trainingpeaks errechnet (ein weiterer Grund warum ich WKO4 in dem Fall nicht so gerne benutze).

### Fazit

Das sieht jetzt alles sehr kompliziert aus. Ist es vermutlich auch. Allerdings ist dieser Workflow über die letzten Jahre gewachsen und ich habe mir immer wieder Tools gesucht, die das machen oder darstellen was mich gerade interessiert. Ja, ich kenne auch Runalyze, aber irgendwie bin ich damit nie so wirklich warm geworden und ich wollte meine Excel Tabelle immer als Datensicherung behalten Mittlerweile geht sie bis 2007 zurück und ich habe so noch keine Daten verloren.

## Was eine selbstgebaute Lösung zur Trainingsanalyse für mich können müsste

Wenn man jetzt also eine selbstgebaute, kostenlose OpenSource-Software bauen wollen würde (looking at you Stefan) müssten natürlich alle oben genannten Punkte darin vorkommen, sonst würde ich einfach immer wieder auf andere Tools zurückgreifen. Wenn man sie priorisieren wollte dann wäre es die folgende Reihenfolge:

1. Trainingslog welches folgende Informationen enthält: Datum, lfd #, Trainingsart, Zeit, Strecke, Pace, Avg HFQ, Avg Power, Running Efficiency, Schuh, geplanter Wattbereich, ATL, CTL, TSB, aktuelle FTP (vielleicht müsste auch das Gewicht für die Berechnungen integriert werden), außerdem wöchentliche Zusammenfassung der km und TSS.
2. Darstellung der PMC
3. Darstellung der Powerkurve des Traininings im Vergleich zu den Trainingsbereichen.
4. Ermittlung der FTP durch eine Power Duration Curve
5. Visualisierung und Analyse der Trainingsbelastung (TSS und km): wöchentlich, jährlich, im Vergleich zu den vorherigen Wochen/Jahren, Year to Date, Möglichkeit Ziele zu definieren und diese im Vergleich anzuzeigen
6. Analyse der Zeit die in den verschiedenen Trainingszonen in verschiedenen Zeitabschnitten verbracht wurde
7. Analyse und Vergleich des Intervalltrainings (Vergleich gleicher Intervalle über die Zeit), evtl angelehnt an die von Strava Premium.
8. Trainingsplanung incl. einer Bibliothek der zu absolvierenden Einheiten (Interval builder), evtl sogar modularisiert und auswählbar zur einfachen Planung.
9. Wettkampfprognosen basierend auf historischen Wettkämpfen und aktueller FTP, RE und Gewicht.

Gerne kann ich dir, Stefan, zu den einzelnen Punkten dann noch weitere Infos zukommen lassen :)<br /><br />
