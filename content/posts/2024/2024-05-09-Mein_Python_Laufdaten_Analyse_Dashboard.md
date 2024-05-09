---
title: Mein Python Laufdaten Analyse-Dashboard
date: 2024-05-09T20:00:00
---

Mein Versuch TSS und RSS zu vergleichen ist etwas eskaliert und daraus ist ein Python Dashboard zur Analyse/Darstellung meiner Laufdaten entstanden. Mit diesem Artikel möchte ich es dokumentieren. Falls jemand daran Interesse hat, der Quelltext ist auf <a href='https://github.com/johndillinger15/Traininganalysis_with_Python' class='external' target='_blank' rel='noopener'>Github</a> verfügbar und das Script könnt ihr <a href='https://raincastle.eu.pythonanywhere.com' class='external' target='_blank' rel='noopener'>hier</a> testen. Ich würde mich freuen, wenn ich euch bei mir meldet, falls ihr es tatsächlich angeschaut habt oder benutzt.

## Ausgangssituation

Ich bin nun mehr und mehr dazu übergegangen die Apps die ich zur Analyse meines Trainings benutze zu reduzieren. Aktuell benutze ich nur noch die Stryd App, da hat wohl ihr Marketing, oder ihr Plan, voll funktioniert. Aber in der Stryd-App habe ich, im Gegensatz zum TrainingPeaks/WKO-Ökosystem alles an einem Ort und muss auch die FTP nicht übertragen. Nach einem Lauf trage ich die wichtigsten Daten nochmal in meine Excel Datei ein, um wenigstens ein Dokument zu haben, das vermutlich allen Widrigkeiten trotzen und nicht verschwinden wird (meine Aufzeichnungen gehen tatsächlich zurück bis zum Start meiner Laufkarriere im Jahr 2007) und mein Backup darstellt. Außerdem ist das Übertragen der Werte aus der App in mein "Trainingstagebuch" eine liebgewonnene Gewohnheit geworden und dabei reflektiere ich gerne nochmal über den Lauf.

Diese Excel Datei bildet auch die Grundlage für das Python-Script. Über die Jahre habe ich in Excel versucht Graphen und ein Dashboard zu bauen, aber so richtig zufrieden war ich damit nie. Anfang des Jahres bin ich dann auf die Möglichkeiten von Python aufmerksam geworden und habe dann nun auch endlich einen Zugang dazu gefunden. Stück für Stück ist dann dises Dashboard entstanden, das jetzt 5 Tabs/Unterbereiche umfasst.

## Walkthrough

Für das Dashbord verwende ich aktuell die Python Version 3.12.1 mit folgenden Plugins: Dash, Pandas und Plotly.

### Important Values (Tab 1)

Im ersten Tab have ich versucht alle wichtigen Daten für den aktuellen Tag zusammenzufassen.

[<img src='/assets/images/2024/Tab1.png' class='w-4/5' align='center' />](/assets/images/2024/Tab1.png)<br><br>

Die erste Graphik oben zeigt einen schnellen Überblick der Läufe der letzten 90 Tage. Die x-Achse ist dabei der Zeitstrahl, die y-Achse representiert die Länge des Laufes und die Größe des Kreises die Belastung in RSS.

Die erste Box auf der linken Seite (rote Farbe), zeigt alle wichtigen Werte des heutigen Laufs, die zweite Box darunter (ockerfarben) zeigt eine kurze Zusammenfassung des morgigen Laufs (n/a, falls es morgen keinen Lauf gibt). Die hellblaue Box darunter zeigt meine Berechnungen für verschiedenen Wettkampfdistanzen. Dabei verwende ich neben der CP, meine eigenen Erfahrungswerte für die Wattwerte über die jeweiligen Distanzen (5k = 107% CP, 10k = 102% CP, HM = 96% CP, Marathon = 90% CP) und meine spezifische Laufeffizienz bei den jeweiligen Wattwerten. Die letzte Box auf der linken Seite zeigt schließlich einen Vergleich der Belastung und des Laufvolumens der letzten vollständigen Woche im Vergleich zum Durchschnitt des letzten Jahres mit einem kleinen Indikatorpfeil. Der untere Teil der Box zeigt das Gleiche für die letzten 7 Tage, inklusive der summierten Zeit und dem Anteil des längsten Laufs am gesamten Laufvolumen (idealerweise sollte dieser Wert immer unter 30% liegen). Ich schaue mir immer auch gerne den Zeitraum der vergangenen 7 Tage losgelöst vom starren Wochenkorsett an, da das manchmal auch ganz interessant ist, wie die laufende Belastung so ist.

Auf der rechten Seite habe ich in der ersten Box ein paar unzusammenhängende Werte zusammengefasst. Auf der einen Seite das jährliche Laufvolumen, auch im Vergleich zu meinem Ziel. Auf dern anderen Seite die Höhenmeter und die gelaufenen Kilometer mit den Kindern im Thule. In der letzten Zeile habe ich dann noch die aktuelle CP (und die höcshte CP des Jahres in Klammer), sowie der Fortschritt meines Gipfelprojektes (das wird automatisch aus dem Peaks Projekt Script importiert).

In der zweiten Box auf der rechten Seite habe ich die aktuellen Belastungs- und Formwerte zusammengefasst. CTL und ATL sind selbsterklärend, dann habe ich noch die heutige load (mit einem kleinen Inidikatorpfeil) und als Formindikator den Durchschnitt der pwr/hr über die letzten 42 Tage mit Indikatorpfeil und in Klammern den Maximalwert der letzten 365 Tage.

Zu guter Letzt schließt eine Tabelle meiner Laufschuhe inklusive der gelaufenen Kilometer für die einzelnen Schuhe das Dashboard ab. Die Liste der Schuhe lese ich auch aus der Trainings-Exceldatei ein, so bleibt die Liste immer aktuell und ausrangierte Schuhe tauchen dann nicht mehr auf. Wenn die Schuhe mehr als 500km auf dem Tacho haben, färt sich die Zeile gelb, ab 750km dann rot.

### Power-based Figures (Tab 2)

Auf der zweiten Seite, bzw dem zweiten Tab habe ich alle Graphen zusammengefasst, die auf der Leistung (also Watt) basieren zusammengefasst.

[<img src='/assets/images/2024/Tab2.png' class='w-4/5' align='center' />](/assets/images/2024/Tab2.png)<br><br>

Die erste Abbildung zeigt die RSS für jeden Lauf und im Vergleich dazu die CTL. Laut Steve Palladino sollte die Belastung der Regenerationsläufe zB nicht über dem Wert der CTL liegen.

Der nächste Graph, rechts daneben, zeigt die load der letzten 90 Tage und der erste Graph in der zweiten Zeile den Verlauf der CP des letzten Jahres.

Der letzte Graph dieses Tabs zeigt dann noch den Durchschnitt des Verhältnisses von Power zu Herzfrequenz der letzten 42 Tage für das letzte Jahr. So kann ich überprüfen, wie die Form aktuell so ist, im Vergleich zum letzten Jahr.

### Running Volume (Tab 3)

Im dritten Tab have ich versucht die restlichen Graphen zusammenzufassen die nicht direkt auf der Power basieren sondern eher mit dem Laufvolumen zu tun haben

[<img src='/assets/images/2024/Tab3.png' class='w-4/5' align='center' />](/assets/images/2024/Tab3.png)<br><br>

Der erste Graph auf diesem Tab (fig11) zeigt einen Vergleich der wöchentlichen Kilometer (Balkendiagramm) und dem Running Stress Score (RSS). Ich habe die beiden Y-Achsen so angepasst, dass bei einer standard Woche mit nur Zone2-Läufen der rote Punkt direkt an der Spitze des Balken der Kilometerachse ist. Ist der rote Punkt über dem Balken, war es eine intensive Trainingswoche, ist der Balken darunter war es eine sehr leichte Trainingswoche.

Ich denke, der nächste Graph (fig13) ist relativ selbsterklärend. Er zeigt den tatsächlichen Lauffortschritt des Jahres in grün und das Ziel des Jahres in rot. Aktuell errechne ich das Ziel aus dem Durschnitt der Kilometer der letzten 5 Jahre. Für 2024 sind das 1642km. Das Laufvolumen ist bei mir immer ein recht guter Indikator für meine Form und wie es grundsätzlich so läuft, daher schaue ich mir auch immer gerne das Laufvolumen der letzten 90 und 365 Tage an. Dies ist im nächsten Graph dargestellt (fig8). Wie sich das Laufvolumen über die Jahre meiner Laufkarriere entwickelt hat, ist dann in der nächsten Abbildung dargestellt (fig5).

Neben dem Laufvolumen interessieren mich seit ein paar Jahren auch die gelaufenen Höhenmeter. Ein Vergleich der monatlichen und jährlichen Höhenmetern ist in den letzten beiden Graphen dieses Tabs dargestellt. Ich versuche seit ein paar Jahren die 10.000 Höhenmeter im Jahr zu erreichen, daher die gestrichelte Linie. Das ist mir aber leider bisher noch nicht gelungen.

### 2024 Graphs (Tab 4)

Ich plane meine Saison auch in meiner Exceldatei und dafür ist es nützlich nicht nur zurück zu schauen, sondern auch nach vorne bzw. das ganze Jahr im Blick zu haben. Die Graphen auf diesem Tab gibt es auch schon auf den anderen Tabs, daher muss ich die wohl nicht mehr extra erklären.

[<img src='/assets/images/2024/Tab4.png' class='w-4/5' align='center' />](/assets/images/2024/Tab4.png)<br><br>

### Peaks Map (Tab 5)

Mein anderes Python-Lauf-Projekt ist es den Fortschritt meines [Gipfelprojektes](https://github.com/johndillinger15/Peaks_Project_Map) in einer OpenStreetMap darzustellen. Ich dachte mir, dass es doch eigentlich eine gute Idee wäre auch diese Karte und die Liste der Gipfel, die ich schon gelaufen bin, in dieses Dashboard aufzunehmen. Das Peaks-Script muss zwar immernoch separat ausgeführt werden, um die Karte zu generieren, aber zumindest habe ich den aktuellen Fortschritt als Zahlen auf der ersten Seite und die Liste der Gipfel unter der Karte ohne das Script extra ausführen zu müssen.

## Fazit

Um das Script schnell auszuführen und das Dashboard aufzurufen, habe ich mir auf dem Mac einen Shortcut erstellt. Somit reicht jetzt ein Klick um das Script zu starten, dann muss ich nur noch die Webseite (localhost:8050) ansurfen und fertig. Das Script kann über den Shortcut in der Menüzeile auch wieder gestoppt werden. Hier noch einmal der Link zu einer Online-Version des Dashboards: <a href='https://raincastle.eu.pythonanywhere.com' class='external' target='_blank' rel='noopener'>hier</a>

<br>
