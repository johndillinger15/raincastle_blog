---
title: Alle Gipfel im Bayerischen Wald laufen
date: 2023-05-06
---

Seit wir nach Straubing gezogen sind üben die Trails und Gipfel des <a href='https://de.wikipedia.org/wiki/Bayerischer_Wald' class='external' target='_blank' rel='noopener'>Bayerischen Waldes</a> eine starke Faszination und Anziehung auf mich aus. Da kam bei mir in den letzten Tagen der Gedanke auf, wie viele Berge gäbe es denn, die man im Bayerischen Wald hoch laufen könnte?

## Ausgangslage

In einem meiner letzten Artikel stellte ich die Web-App <a href="https://summitbag.com" class="external" target='_blank' rel='noopener'>Summitbag</a> vor, mit der man alle seine gelaufenen Berggipfel dokumentieren kann. Summitbag greift auf die Daten von OpenStreetMap zu, also dachte ich mir könnte es möglich sein, aus den Daten von OpenStreetMap eine Liste aller Berge im Bayerischen Wald zu extrahieren.

## Datensammlung

Der erste Schritt dahin war es erstmal die Grenzen des Bayerischen Waldes zu finden bzw definieren. Zuerst versuchte ich das manuell, aber recht schnell fand ich heraus, dass OpenStreetMap sogar ganze Regionen samt Grenzen im Datenbestand hat und natürlich war der <a href="https://www.openstreetmap.org/relation/611246" class="external" target='_blank' rel='noopener'>Bayerische Wald</a> da auch dabei.

Die südliche Grenze ist hierbei die Donau, die nord-östliche Grenze bildet die Landesgrenze zu Tschechien. Im Westen und Norden ist der Regen bis Cham die Grenze und weiter nach Osten die Chamb. Die letzen Kilometer von südlich von Furth im Wald bis zur tschechischen Grenze verlaufen dann entlang von Landkreisgrenzen, die ich aber nicht genauer definieren kann.

[<img src='/assets/images/2023/Bayerischer_Wald_borders.png' class='w-4/5' align='center'/>](/assets/images/2023/Bayerischer_Wald_borders.png)<br><br>

Nun hatte ich also die Grenzen des Bayerischen Waldes. Als nächstes ging es dann an die Liste der Berggipfel. Nach kurzer Recherche fand ich eine Webseite: <a href='https://overpass-turbo.eu' class='external' target='_blank' rel='noopener'>Overpass Turbo</a>. Overpass Turbo ist ein webbasiertes Datenfilter-Tool für OpenStreetMap. Mit Overpass Turbo kann man Overpass-API-Abfragen ausführen und die resultierenden OSM-Daten interaktiv auf einer Karte darstellen oder als csv oder JSON exportieren. Es gibt einen integrierten Assistenten, der das Erstellen von Abfragen super einfach macht. Mittels der <a href='https://osm-queries.ldodds.com/tutorial/02-node-output.osm.html' class='external' target='_blank' rel='noopener'>Doku</a> konnte ich dann eine Abfrage erstellen, die mir alle Gipfel im Bayerischen Wald als Karte und als .csv-Datei lieferte.

Die Berge werden in OSM als "natural"="peak" klassifiziert. Jeder Gipfel kann dann weitere Attribute wie Höhe ("ele") oder einen Namen ("name") haben. Ich entschied mich dafür, dass ein Berg mindestens einen Namen haben muss um für mein Projekt zu zählen, eine Höhe ist optional, die kann ich ja dann Messen. Am Ende kam ich dann auf eine Liste mit 530 Gipfeln. Um diese zu erstellen hab ich folgenden Code benutzt:

> // uncomment to get a list as csv output
>
> // [out:csv(::id, name, ele, ::lat, ::lon)];
>
> // find any area with this name
>
> area["name"="Bayerischer Wald"];
>
> // find any ways and relations that are WITHIN that area, filtering them by their tag
>
> (node(area)["natural"="peak"]["name"];);
>
> out;

Was mich jetzt noch interessierte war, wie weit sind die Gipfel denn von Straubing entfernt, denn ich würde sie gerne nach der Entfernung (Luftlinie) sortieren. Nach langer Recherche, einem versenkten Abend in R, einem Exkurs auf die Seite <a href='https://luftlinie.org' class='external' target='_blank' rel='noopener'>https://luftlinie.org</a> entschied ich mich doch einen anderen Weg zu gehen. Mittels Overpass gibt es die Möglichkeit alle Features anzeigen zu lassen die sich in einem Umkreis von x Metern befinden.

> // uncomment to get a list as csv output
>
> // [out:csv(::id, name, ele, ::lat, ::lon)];
>
> node(around:10000,longitude, latitude)["natural"="peak"]["name"];
>
> out;

Also bildete ich Buckets von 5 Kilometer (der Berg mit der größten Enternung liegt ca. 95km weit Weg) und führte die Listen dann mit etwas Excel-Zauberei zusammen (SVerweis to the rescue), sodass ich nun [eine Liste](/assets/files/2023/peaks.xlsx) aller Berge im Bayerischen Wald basierend auf den OSM Daten habe, die mindestens einen Namen haben und das alles in 5 Kilometerschritten sortiert.

[<img src='/assets/images/2023/peaks_bayerwald.png' class='w-4/5' align='center'/>](/assets/images/2023/peaks_bayerwald.png)<br><br>

## Progress

Bisher habe ich von den 530 Gipfeln sage und schreibe 10 "abgearbeitet", also ganze 1,9%. Darunter fällt der höchste Berg des Bayerischen Waldes, der <a href='https://www.strava.com/activities/3726015438/overview' class='external' target='_blank' rel='noopener'>Große Arber (1456m)</a>, meinen "Hausberg" der Bogenberg (432m). Außerdem habe ich in den letzten 2 Jahren 3 weitere längere Trailläufe absolviert und dabei die Gipfel <a href='https://www.strava.com/activities/3759672769' class='external' target='_blank' rel='noopener'>Schopf (928m) - Hirschenstein (1095m) - Klausenstein (1048m) - Rauher Kulm (1050m)</a>, <a href='https://www.strava.com/activities/4052539067' class='external' target='_blank' rel='noopener'>Dreitannenriegel (1092m) - Geißkopf (1097m) - Breitenauer Riegel (1118m)</a> und den <a href='https://www.strava.com/activities/7289236773' class='external' target='_blank' rel='noopener'>Buchaberg (593m)</a> "gebagged".

## Next up ?

Als nächstes werde ich mich erstmal wieder an den Hausberg (Bogenberg) wagen um mich dort wieder an die Höhenmeter zu gewöhnen und dann habe ich mir eine <a href='https://www.strava.com/routes/3060572424811490228' class='external' target='_blank' rel='noopener'>kleine Runde</a> am Hirschenstein (mein zweiter Hausberg) ausgesucht, denn dort gibt es in der Nähe noch 2 unbesuchte Gipfel, die ich dann abhaken kann. Zum einen der Kälberbuckel (1053m) und der Schusterstein (998m), falls ihr Interesse habt, hier der [GPX-Track](/assets/files/2023/Hirschenstein-Kälberbuckel-Schusterstein.gpx) für eure Uhr.

[<img src='/assets/images/2023/Hirschenstein-Kälberbuckel-Schusterstein.png' class='w-4/5' align='center'/>](/assets/images/2023/Hirschenstein-Kälberbuckel-Schusterstein.png)<br><br>

## Long Way to go

Diese Liste ist sicher kein Ziel, welches ich in den nächsten 3-5 Jahren schaffen werde können, es ist eher eine Art kreatives Lebensziel, worauf man immer zurückgreifen kann. Eventuell etwas was man zusammen mit der Familie oder den Kindern, zumindest teilweise, machen kann. Also eher ein Ziel für die nächsten 20-30 Jahre. Aber selbst dann sind es mehr als 10 Gipfel pro Jahr 😅 Die Liste hat auch manche Kuriositäten zu bieten. Da gibt es zum Beispiel den Garbuckel (323m). Der Kompass meines Handys zeigt mir hier auf der Couch eine Höhe von 320m an, Straubing selbst hat eine Höhe (lt Wikipedia) von 322m. Wie dieser Eintrag als Gipfel zustande gekommen ist, würde mich auch mal interessieren. Da dieser Gipfel aber im ersten Bucket (bis 5km) ist, wird dieser Gipfel wohl schnell gebagged werden. Der Gipfel hat es sogar auf die Strava Karte geschaft:

[<img src='/assets/images/2023/Garbuckel.png' class='w-4/5' align='center'/>](/assets/images/2023/Garbuckel.png)<br><br>

## Liste der bisher absolvierten Gipfel

<br>

1. Bogenberg (432m) - [Blog](/posts/2022-03-09-trailrunning-am-bogenberg), <a href='https://www.youtube.com/watch?v=Jads8edKb_8&t=3s' class='external' target='_blank' rel='noopener'>Youtube</a>, <a href='https://www.strava.com/activities/6771492971' class='external' target='_blank' rel='noopener'>Strava</a>
2. Großer Arber (**1456m**) - [Blog](/posts/2020-07-09-corona-aerob-fokus-und-ersatzwettkaempfe), <a href='https://youtu.be/W4YSJA2AR10' class='external' target='_blank' rel='noopener'>Youtube</a>, <a href='https://www.strava.com/activities/3726015438' class='external' target='_blank' rel='noopener'>Strava</a>
3. Schopf (928m) - <a href='https://youtu.be/6_o4I1SRyh8' class='external' target='_blank' rel='noopener'>Youtube</a>, <a href='https://www.strava.com/activities/3759672769' class='external' target='_blank' rel='noopener'>Strava</a>
4. Hirschenstein (**1095m**) - <a href='https://youtu.be/6_o4I1SRyh8' class='external' target='_blank' rel='noopener'>Youtube</a>, <a href='https://www.strava.com/activities/3759672769' class='external' target='_blank' rel='noopener'>Strava</a>
5. Klausenstein (**1048m**) - <a href='https://youtu.be/6_o4I1SRyh8' class='external' target='_blank' rel='noopener'>Youtube</a>, <a href='https://www.strava.com/activities/3759672769' class='external' target='_blank' rel='noopener'>Strava</a>
6. Rauher Kulm (**1050m**) - <a href='https://youtu.be/6_o4I1SRyh8' class='external' target='_blank' rel='noopener'>Youtube</a>, <a href='https://www.strava.com/activities/3759672769' class='external' target='_blank' rel='noopener'>Strava</a>
7. Dreitannenriegel (**1092m**) - <a href='https://www.strava.com/activities/4052539067' class='external' target='_blank' rel='noopener'>Strava</a>
8. Geißkopf (**1097m**) - <a href='https://www.strava.com/activities/4052539067' class='external' target='_blank' rel='noopener'>Strava</a>
9. Breitenauer Riegel (**1118m**) - <a href='https://www.strava.com/activities/4052539067' class='external' target='_blank' rel='noopener'>Strava</a>
10. Buchaberg (593m) - <a href='https://www.strava.com/activities/7289236773' class='external' target='_blank' rel='noopener'>Strava</a>
11. Garbuckel (323m) - <a href='https://www.strava.com/activities/9186441198' class='external' target='_blank' rel='noopener'>Strava</a>, [Blog](/posts/2023-06-02-Gipfel-11-Garbuckel)
12. Urberberg (621m) - <a href='https://www.strava.com/activities/9243414805' class='external' target='_blank' rel='noopener'>Strava</a>, [Blog](/posts/2023-06-11-Gipfel-12-Urberberg)
13. Teufelsfelsen (410m) - <a href='https://www.strava.com/activities/9637744036' class='external' target='_blank' rel='noopener'>Strava</a>, [Blog](/posts/2023-08-13-Teufelsfelsen)
14. Kirnhöhe (468m) - <a href='https://www.strava.com/activities/9637744036' class='external' target='_blank' rel='noopener'>Strava</a>, [Blog](/posts/2023-08-13-Teufelsfelsen)
15. Schwarzer Dachsberg (481m) - <a href='https://www.strava.com/activities/9637744036' class='external' target='_blank' rel='noopener'>Strava</a>, [Blog](/posts/2023-08-13-Teufelsfelsen)

<br>

Und das Ganze noch in Kartenform [hier](/assets/peaks_progress.html).

<br><br>
