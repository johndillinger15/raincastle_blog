---
title: RSS vs TSS - Ergebnis
date: 2024-04-25T20:00:00
---

Mit dem [Herzogstadtlauf](/posts/2024/2024-04-22-Herzogstadtlauf-2024/) ist die Phase der Datensammlung für mein Projekt [TSS und RSS zu vergleichen](/posts/2024/2024-02-01-TSS_vs_RSS_ATL_CTL_TSB_load_Versuchsaufbau/) nun abgeschlossen. Ich wollte dafür einen ganzen Trainingszyklus beobachten um verlässliche und genug Daten zu haben. Lasst uns also mal auf die Daten schauen und sehen was und ob wir daraus lernen können.

### CP vs FTP

Die den Belastungswerten zugrunde liegenden Werte sind die Wattwerte an der Schwelle, also die FTP und die CP. Im Stryd-Trainingsplan waren viele Testläufe integriert um die CP/FTP ständig aktuell zu halten. Den Verlauf der beiden Werte über den Trainingsplan könnt ihr in der Abbildung unten sehen. Die gestrichelte Linie markiert den Beginn des Trainingsplan.

[<img src='/assets/images/2024/Figure_CP.png' class='w-4/5' align='center' />](/assets/images/2024/Figure_CP.png)<br><br>

Es scheint also so, als ob die FTP generell etwas höher liegt und auch auf die Testläufe schneller reagiert als die CP. Auf der anderen Seite sollen die Läufe in der Power-Duration-Curve die der CP zugrunde liegen, zeitlich gewichtet zu sein, so richtig bestätigen kann ich das bisher aber nicht.

Da ich diesen Trainingsplan die CP als Grundlage für die Trainingsbereiche verwendet habe und nicht mehr die FTP, vielen mir die Intervallläufe und Schwellenläufe leichter als in der Vergangenheit. Das ist natürlich, wenn man sie den Unterschied zwischen der CP und FTP ansieht auch nicht wirklich verwunderlich.

### RSS vs TSS per Lauf

Als nächstes habe ich mir dann die tasächlichen Belastungswerte angeschaut und die RSS und TSS pro Lauf aufgetragen. Man kann glaube ich erkennen, dass es Unterschiede zwischen RSS und TSS pro Lauf gibt und dass der Unterschied nicht immer gleich ist.

[<img src='/assets/images/2024/Figure_TSS_RSS.png' class='w-4/5' align='center' />](/assets/images/2024/Figure_TSS_RSS.png)<br><br>

Zuerst dachte ich, der Unterschied zwischen TSS und RSS wäre abhängig von der Art des Laufes, also ob es ein kontinuierlicher Lauf oder ein Intervalltraining ist. Also hab ich einen Graphen erstellt mit jeweils einen Boxplot für kontinuierliche Zone2 Läufe und Intervalltrainings. Es scheint so als wären das 2 isolierte Populationen und das Verhältnis TSS/RSS generell bei Intervalltrainings höher.

[<img src='/assets/images/2024/Figure_RSS_vs_TSS.png' class='w-4/5' align='center' />](/assets/images/2024/Figure_RSS_vs_TSS.png)<br><br>

Dann kam ich auf die Idee, dass das Ganze auch einfach nur abhängig von der Geschwindigkeit bzw der Leistung sein könnte. Und wenn ich das Verhältnis RSS/TSS gegen die Leistung plotte zeigt sich tatsächlich eine annähernd lineare Abhängigkeit. Speziell der 10km Wettkampf sticht natürlich heraus. Bei den Intervalleinheiten verzerrt das Ein- und Auslaufen die Geschwindigkeit bzw die Leistung.

[<img src='/assets/images/2024/Figure_19_1.png' class='w-4/5' align='center' />](/assets/images/2024/Figure_19_1.png)<br><br>

Bei den lockeren/langsameren Zone 2 Läufe war das Verhältnis immer so bei 0,7-0,8, beim Herzogstadtlauf war das Verhältnis hingegen 1,18. Wenn man sich anschaut, wo die Werte herkommen, TSS vom Radfahren und RSS direkt vom Laufen, macht es schon Sinn, dass die Belastung beim Laufen immer höher im Vergleich zum Radfahen wird je schneller man läuft, da die Belastung der Schritte auf der Straße auch mit berücksichtigt wird.

### CTL Berechnung

Als nächstes habe ich mir die Berechnung der CTL angesehen, da diese ja direkt aus der RSS bzw TSS berechnet wird. Analog zur TSS und RSS, ist hier der gleiche Unterschied zu sehen die CTL aus der RSS ist niedriger als die CTL berechnet aus der TSS.

[<img src='/assets/images/2024/Figure_1.png' class='w-4/5' align='center' />](/assets/images/2024/Figure_1.png)<br><br>

### load

Der Wert auf den ich in den letzten Jahren am meisten geschaut habe ist die load, also das Verhältnis aus der ATL und der CTL (also kurzfristige vs langfristige Trainingsbelastung). Sie drückt aus, wie schnell ich die Umfänge gesteigert habe. Bei einem Wert über 1,3 steigt die Gefahr einer Verletzung, laut einer [Studie aus dem British Journal of Sports Medicine](https://bjsm.bmj.com/content/51/9/749), signifikant an, sodass man optimalerweise bei einem Wert von 1-1,3 bleiben sollte. Da diese Werte innerhalb des Bezugssystems berechnet werden, sind sie tatsächlich ziemlich ähnlich bzw vergleichbar, ob man die load nun aus TSS oder RSS berechnet.

[<img src='/assets/images/2024/Figure_2.png' class='w-4/5' align='center' />](/assets/images/2024/Figure_2.png)<br><br>

### Fazit

Als Fazit lässt sich wohl sagen, dass es Unterschiede zwischen TSS und RSS gibt. Die RSS wurde ja spezifisch fürs laufen entwickelt und die TSS kommt aus dem Radsport. Daher ist es nachvollziehbar, dass der RSS bei höheren Wattzahlen höher ausfällt als die TSS. Alle Werte die dann daraus berechnet werden, speziell die load, sind dann wieder vergleichbar, da sie ja immer im gleichen Bezugsystem berechnet werden.

Eine Sache die ich aus der Erfahrung nicht so in Erinnerung hatte ist, dass die CP etwas niedriger liegt als die FTP. In früheren Trainingszyklen haben sich die beiden Werte immer angenähert je mehr Daten man gesammelt hatte. Diesmal war das nicht der Fall. Also entweder hatte ich beim 10k noch Luft nach oben, oder es liegt an etwas anderem ;-).

Da ich meinen workflow der Dokmentation meines Trainings etwas verschlanken wollte/will, werde ich also in Zukunft auf die CP und RSS setzen und nicht mehr die TSS aus Trainingpeaks auslesen. So kann ich alles in einer App machen und muss nicht 2 Apps nach dem Training öffnen um mein Trainingstagebuch zu schreiben.
