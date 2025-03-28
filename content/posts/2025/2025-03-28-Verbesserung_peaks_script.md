---
title: Verbesserungen am Peaks Script
date: 2025-03-28T20:30:00Z
---

Für mein Peaks-Projekt nutze ich meist Strava für die Recherche und Planung der Routen. Diese werden dann nach Garmin gesynct und auf die Uhr übertragen, sodass ich mich dann im Wald auch nicht verlaufe. Tipps und Ideen kamen bisher auch immer wöchentlich via Kommot-Newsletter. Als nun die Nachricht reingeflattert kam, dass Komoot <a href='https://stadt-bremerhaven.de/komoot-wechselt-den-besitzer-bending-spoons-uebernimmt/' class='external' target='_blank' rel='noopener'>verkauft</a> wurde, fand ich eine interessante Alternative: <a href='https://wanderer.to' class='external' target='_blank' rel='noopener'>wanderer.to</a>

Als opensource self-hosting Lösung war es mir direkt sympathisch. Der präferierte Installationsweg ist dabei über Docker und so war es ziemlich schnell auf meinem Raspberry Pi installiert. Die Benutzeroberfläche und der Import gefielen mir schonmal sehr gut, da mein Raspberry hinter meinem Router sitzt konnte ich leider keine Routen aus der Community sehen. Auch unterstützt mein Webspace leider keine Docker installation, wodurch ich wanderer.to leider wieder verworfen habe. Falls jemand von euch eine laufende Instanz hat und ich mir dort einen Account klicken könnte wäre das natürlich spitze und lasst es mich gerne wissen.

Allerdings brachte mich die Darstellung auf wanderer.to auf eine Idee für meine eigene Darstellung der Gipfel auf [meiner Webseite](/assets/peaks_progress.html). Aktuell sind dort nur die gelaufenen Gipfel markiert, aber es wäre ja auch cool, die Routen zu sehen, auf denen die Gipfel absolviert wurden. Also habe ich nochmal ChatGPT um Hilfe gebeten. Die .gpx-Dateien lege ich in /gpx/ im Projekt-Ordner ab und das Script kann sie von dort aus lesen und zur Peaks_Map hinzufügen. Die Karte wird dann zum einen in meinem Laufanalysedashboard und auf der Webseite verwendet. Das Script ist <a href='https://github.com/johndillinger15/Peaks_Project_Map' class='external' target='_blank' rel='noopener'>hier</a> auf Github zu finden.

[<img src='/assets/images/2025/new_peaks_map.png' class='w-4/5' align='center' />](/assets/images/2025/new_peaks_map.png)<br><br>
