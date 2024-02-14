---
title: RSS vs TSS - Versuchsaufbau
date: 2024-02-01
---

Seit 2017 Laufe ich mit dem Stryd Powersensor. Seit dieser Zeit beschäftige ich mich viel mit den gesammelten Daten, der Belastungssteuerung und Trainingsplanung. Um die Belastung des Trainings (auf Basis der Leistung) zu messen gibt es auf der einen Seite den TSS aus dem WKO/TrainingPeaks Universum, zum anderen den RSS aus dem Stryd Universum. Seit den Stryd-Anfängen habe ich mich immer gefragt was der praktische Unterschied zwischen RSS und TSS ist (den Unterschied in der Berechnung findet ihr weiter unten), ob sie vergleichbar und/oder austauschbar sind und ob man sie in gleicher Weise verwenden kann.

Vielleicht ist diese Frage sinnlos, total unbedeutend, oder es macht am Ende einfach keinen (großen) Unterschied. Dennoch war es ein "Jucken in meinem Kopf" dass ich mir anschauen wollte. Folgt mir also in dieses Rabbithole, am Ende könnte diese "kleine" Frage dann doch ein wenig eskaliert sein...

### Aktueller Workflow

Aktuell benutze ich mehr als eine handvoll Apps oder Programme um meine Laufdaten zu analysieren. Dazu gehören: TrainingPeaks, WKO, Runalyze, die Stryd App, etc. Am Ende trage ich alles nochmal in meine Excel Datei ein, um wenigstens ein Dokument zu haben, das vermutlich allen Widrigkeiten trotzen und nicht verschwinden wird und mein Backup darstellt. Außerdem ist das Übertragen der Werte aus den Portalen in mein "Trainingstagebuch" eine liebgewonnene Gewohnheit geworden und dabei reflektieren ich nochmal über den Lauf.

In diese Excel Datei trage ich also dann alle möglichen Daten des Laufes ein und errechne mir dann noch ein paar weitere Daten daraus. Außerdem bilde ich Monats- und Jahresgrafiken und so weiter.

[<img src='/assets/images/2024/Excel.png' class='w-9/10' align='center' />](/assets/images/2024/Excel.png)<br><br>

Seit einiger Zeit teste ich herum um mir ein schönes Dashboard in Excel zu basteln in dem ich alle wichtigen Werte gut im Blick habe. Leider habe ich das in Excel nicht so hinbekommen wie ich mir das vorgestellt habe. Ich habe mir zwar ein paar Graphen gebastelt, aber leider waren die nicht auf einer Seite und vor allem mussten sie täglich manuell aktualisiert werden.

### Neuer Ansatz

Das gibt bzw gab mir nun die Möglichkeit zwei Dinge zu verbinden. Zum Einen habe ich einen Anwendnungsfall um ein wenig zu Coden, in diesem Fall Python. Zum Anderen werde ich das Flugzeug bauen während es fliegt, und mittels ChatGPT, der Doku und klassischem Google den Python-Code des Dashboards schreiben. Also habe ich auch einen Anwendungsfall um ChatGPT ein wenig zu testen, man muss ja up-to-date bleiben.

Um also RSS und TSS zu vergleichen werde ich bis zum nächsten Wettkampf (dem Herzogstadtlauf Ende April) beide Werte in meine Excel-Datei eintragen und daraus jeweils die CTL, ATL und load berechnen (mehr dazu unten). Dann werde ich versuchen jeweils einen Graph dafür zu bauen um es auch anschaulich zu machen.

### TSS

TSS (Training Stress Score) wird schon länger als ein Maß für die Training Load im Radsport eingesetzt. Eine einstündige Fahrradaktivität bei maximaler Steady-State-Intensität beträgt 100 TSS. Seit es Wattmesser auch für das Laufen gibt wird TSS auch für das Laufen genutzt, beim Laufen beträgt die gleiche einstündige Aktivität 111 TSS. Die TSS wird wie folgt berechnet:

> TSS = (duration of workout in seconds x NPx IF)/(FTP x 3600) x 100

### RSS

Im Gegensatz zur TSS gibt es bei Stryd den <a href='https://help.stryd.com/en/articles/6879537-what-is-the-rss-and-how-does-it-differ-from-tss' class='external' target='_blank' rel='noopener'>RSS</a> (Running Stress Score).

Im Artikel wird der RSS so beschrieben: _Der Running Stress Score (RSS) ist eine einzelne Zahl, die Läufern hilft, ihr tägliches Training zu verstehen. Es berücksichtigt das Volumen und die Intensität Ihrer Trainingseinheit, um Ihnen eine einzelne Zahl oder „Punktzahl“ zu geben. Der Running Stress Score ähnelt dem TSS (Training Stress Score), mit dem Sie die Belastung von Trainingseinheiten unterschiedlicher Dauer und Intensität vergleichen können. Der Unterschied zwischen TSS und RSS ist gering. Der Unterschied ergibt sich aus der Tatsache, dass die Gleichung für RSS die zusätzliche biomechanische Belastung Ihres Körpers durch Laufen berücksichtigen soll, während es sich beim Radfahren größtenteils um aeroben Stress handelt._

Die RSS wird wie folgt berechnet:

> RSS for each second of your run = a \* (one second power / Critical Power)^b

### CTL

Die chronische Trainingsbelastung (Fitness, <a href='https://help.trainingpeaks.com/hc/en-us/articles/204071884-Fitness-CTL-' class='external' target='_blank' rel='noopener'>CTL</a> kombiniert Dauer und Intensität, um einen Wert dafür zu liefern, wie viel ein Athlet in der Vergangenheit trainiert hat. TrainingPeaks berechnet CTL standardmäßig als exponentiell gewichteten Durchschnitt der täglichen TSS für die letzten 42 Tage (7 Wochen).

Die CTL wird wie folgt berechnet:

> CTLtoday = CTLyesterday + (TSStoday - CTLyesterday)(1/CTL time constant)

### ATL

Die akute Trainingsbelastung (Ermüdung, <a href='https://help.trainingpeaks.com/hc/en-us/articles/204071894-Acute-Training-Load' class='external' target='_blank' rel='noopener'>ATL</a> kombiniert Dauer und Intensität, um einen Wert dafür zu liefern, wie viel ein Athlet kürzlich trainiert hat. TrainingPeaks berechnet ATL standardmäßig als exponentiell gewichteten Durchschnitt der täglichen TSS der letzten 7 Tage.

Die ATL wird wie folgt berechnet:

> ATLtoday = ATLyesterday + (TSStoday - ATLyesterday)(1/ATL time constant)

### load

Die load habe ich nach folgendem Paper in diese Reihe aufgenommen <a href='https://bjsm.bmj.com/content/51/9/749' class='external' target='_blank' rel='noopener'>Murray et al., 2017</a>, um meine Umfänge nicht zu stark zu steigern, bzw das Verletzungsrisiko gering zu halten. In dem Paper wurde untersucht ob man lieber gleitende Durchschnitte der letzten 7 vs letzten 42 Tage verwenden sollte oder lieber "exponentially weighted moving averages" der Werte. Da ich eh die CTL und ATL hatte und die, meinem Verständnis nach, genau das abbilden.

### Dashboard

Um die Unterschiede von TSS und RSS zu visualisieren habe ich mir 4 Graphen gebastelt. Der erste Graph zeigt den Unterschied der CTL berechnet aus TSS und RSS. Der zweite Graph zeigt die load berechnet aus CTL und ATL. Der dritte Graph zeigt den direkten Vergleich der CP aus der Stryd App und der FTP aus WKO5. Der letzte Graph zeigt dann den Unterschied pro Lauf der RSS im Vergleich zur TSS um zu sehen ob es da größere Unterschiede gibt. Die grüne gestrichelte Linie markiert das Ende der 2-wöchigen Testphase in der ich 3 Testläufe zur =ptimierung der CP/FTP absolvierte.

[<img src='/assets/images/2024/Dashboard.png' class='w-4/5' align='center' />](/assets/images/2024/Dashboard.png)<br><br>

Nach dem Herzogstadtlauf werde ich dann über die Ergebnisse berichten.<br>
