---
title: STRYD berechnet die FTP/CP jetzt automatisch
date: 2019-07-10
---

Als ich heute morgen aufwachte, fand ich eine eMail von STRYD in meinem Postfach mit dem Betreff "**Introducing auto-calculated Critical Power**" (hier der <a href='http://blog.stryd.com/2019/07/09/introducing-auto-calculated-critical-power/?fbclid=IwAR1odGO6kRlJ1YpeP3herFx92WFDy1i7oz13QlJRm5C4LEuN4Smz3rtVCW4' class='external' target='_blank' rel='noopener'>Blog-Artikel</a> dazu). Dieses Feature wurde schon vor ca. 2 Wochen im Stryd Power Podcast angekündigt und fand nun den Weg in die iOS und Android Apps. Soweit ich sehen kann, ist das Feature noch nicht auf der Website verfügbar.

Bisher musste man entweder auf andere Software ausweichen, die entweder kostenpflichtig (WKO4) oder frickelig (Golden Cheetah) war, oder einen Test machen. Der Vorteil der Software ist, dass man eine relativ gute Abschätzung seiner Leistung bekommt, wenn das Modell mit guten Daten gefüttert wird. Da die Daten dann meistens von den letzten 90 Tagen genommen werden hat man einen guten Überblick, kann auch verschiedene Zeiträume vergleichen und kann die Tagesform „herausmitteln“. Das ist nämlich genau der Nachteil der Tests. Sie liefern einen oder zwei Datenpunkte des Models und eine zeitlichen Snapshot von genau dem Tag. Verläuft der Test aus irgendwelchen Gründen suboptimal hat man getreu dem Motto „Garbage in, Garbage out“ eben auch einen nicht optimalen Wert.

Deshalb benutze ich seit längerem schon WKO4 um meine FTP mit Hilfe der Power Duration Curve zu ermitteln. Dort werden die Rohdaten gezeigt und auch die berechnete Kurve. Dazu wird für verschiedene Dauer die maximale Power aus verschiedenen Trainings der letzen 90 Tage aufgetragen und das dann mathematisch modelliert und die FTP asymptotisch an den „Lacate steady state“ angenähert. Man kann also sehr gut sehen, wo die Daten gut sind und wo nicht (siehe Abbildung unten).

[<img src='/assets/images/B0AEEC93-6B63-4005-B40E-BFC7DFA53785.png' class='w-4/5' align='center'/>](/assets/images/B0AEEC93-6B63-4005-B40E-BFC7DFA53785.png)<br><br>

Mit dem aktuellen Update der Stryd iOS und Android Apps stellt Stryd nun die automatische Ermittlung der CP zu Verfügung. Allerdings kann man die Rohwerte nicht einsehen und bekommt am Ende nur die CP und die CP in Watt/kg angezeigt. Das hilft einem schon mal sehr viel weiter. Ich habe meine FTP/CP aus WKO4 und STRYD verglichen und sie sind tatsächlich bis auf 1 Watt identisch, was mich sehr optimistisch macht, dass das auch alles Hand und Fuß hat.

Ich würde mir dennoch wünschen, die zugrunde liegenden Rohdaten sehen zu können, um zu sehen welche Dauer ich nochmal testen könnte um das Modell zu verbessern. Allerdings vereinfacht dieser Schritt den Einstieg in das Laufen mit Power enorm und für die meisten Läufer reicht ein einfacher Wert auch aus, nicht jeder will sich ja die Rohdaten ansehen sondern einfach nur laufen 🙂.<br><br>
