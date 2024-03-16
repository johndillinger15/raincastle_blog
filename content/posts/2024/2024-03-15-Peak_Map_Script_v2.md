---
title: Peak Map Script v2.0
date: 2024-03-15
---

Anfang Mai 2023 habe ich die erste Version meiner [Peaks Map](/posts/2023-05-06-Alle-Gipfel-im-bayerischen-Wald/) mittels R erstellt. Mittlerweile habe ich das Script auf Python portiert und etwas erweitert, den Prozess beschreibe ich nun in diesem Artikel.

## Peaks Map v1.0

Im Vergleich mit der Version 2.0 der Peaks Map war der Ansatz für die erste Version der Peaks Map noch etwas umständlicher. Die Liste aller Gipfel im Bayerischen Wald lud ich manuell mit Hilfe von Overpass-Turbo herunter. Um die Gipfel dann nach Distanz zu sortieren musste ich sie in Buckets von 5 Kilometer einteilen und dann in eine Excel-Liste kopieren.

Um eine Karte aller gelaufenen Gipfel zu erzeugen hatte ich mir dann im August 2023 ein "R"-Script geschrieben, welches mir eine Karte mit den gelaufenen Gipfeln auf Basis der OpenStreetMap Kartne generiert, die ich dann auch auf der Webseite veröffentlicht habe.

## Peaks Map v2.0

Anfang dieses Jahres habe ich mich intensiver mit Python beschäftigt und da kam ich auf die Idee die Peaks Map statt mit "R" mit Phython umzusetzen. Python erschien mir flexibler und besser geeignet für diese Zwecke.

Zuerst habe ich Chat-GPT damit beauftragt das R-Script für die Karte in Python zu übersetzen:

```python
import pandas as pd
import folium
import osmnx as ox
import geopandas as gpd
from math import radians, sin, cos, sqrt, atan2

#### Make Peaks Map
#### Import Peaks from the CSV file
imported_peaks_data = pd.read_csv("peaks_data.csv")

#### Define color palette
color_palette = {"old": "navy", "new": "firebrick", "planned": "purple"}

#### Create Map
map_peaks = folium.Map(tiles='openstreetmap')

#### Add circle markers to the map
for index, row in imported_peaks_data.iterrows():
    folium.CircleMarker(
        location=[row['latitude'], row['longitude']],
        popup=f"{row['name']}<br> Elevation: {row['elevation']}m, <br>Gelaufen:, {row['gelaufen']}",
        color=color_palette[row['type']],
        fill=True,
        fill_opacity=0.75,
        radius=10
    ).add_to(map_peaks)

#### Fit the map to include all circle markers
map_peaks.fit_bounds(map_peaks.get_bounds())

#### Save the map
map_peaks.save('peaks_progress.html')
```

Dieses Script liest die 'peaks_data.csv' Datei ein und speichert sie in einem dataframe "imported_peaks_data". Diese Liste enthält alle Gipfel die ich gelaufen bin, mit Höhe, Geokordinaten und dem Datum. Anschließend werden die Farben definiert in denen die Gipfel dargestellt werden. Gipfel, die geplant sind, werden in Lila dargestellt, Gipfel die vor den aktuellen Jahr gelaufen wurden in Blau und Gipfel aus dem aktuellen Jahr in Rot. Dann wird die Karte generiert und die Liste der Gipfel durchgegangen und jeder Gipfel als Kreis zur Karte hinzugefügt. Am Ende wird der Zoom der Karte so eingestellt, dass alle Gipfel zu sehen sind und die Karte als html-Datei gespeichert.

Die Liste der Gipfel die in der OpenStreetmap Datenbank vorhanden sind wird ständig aktualisiert. Im Januar 2023 waren es 530 Gipfel, aktuell sind es 569 Gipfel die einen Namen haben. Ich dachte mir, dass es auch möglich sein müsste, die Liste mittels Python-Script zu generieren und so immer eine up-to-date Liste zu haben. Gesagt, probiert.

```python
#### Get most recent Peaks_List
#### Define the place (Bavarian Forest) using its name
place_name = "Bayerischer Wald"

#### Download the points of interest (peaks) within the Bavarian Forest area
tags = {'natural': 'peak'}
gdf = ox.features_from_place(place_name, tags, which_result=2)  # Adjust the which_result parameter as needed

#### Filter peaks with names
peaks_with_names = gdf[~gdf['name'].isnull()]

#### Extract required columns (name, elevation, latitude, longitude)
peaks_data = peaks_with_names[['name', 'ele', 'geometry']].copy()

#### Extract latitude and longitude from geometry
peaks_data['latitude'] = peaks_data['geometry'].y
peaks_data['longitude'] = peaks_data['geometry'].x

#### Drop the geometry column
peaks_data.drop(columns=['geometry'], inplace=True)
```

Mit diesem Script bekommt ihr eine Liste aller Gipfel im Bayerischen Wald (das lässt sich natürlich auch auf andere Regionen anwenden die in den OSM Daten vorhanden sind). Zusätzlich noch die Höhe (elevation) und die Lage (In Längengrad und Breitengrad).

Der letzte Punkt in meinem alten Ansatz war es die Gipfel nach der Entfernung zu meinem Wohnort Straubing zu sortieren um bei der Wahl des nächsten Gipfels im Zweifel einfach den nächsten nächstgelegenen zu wählen. Mittels R ist es mir letztes Jahr nicht gelungen die Entfernung zu berechnen, wodurch ich dann diesen Umweg nehmen musste. Dieses mal Fragte ich Chat-GPT um Rat und siehe da, es geht also doch. Selbst wäre ich auf die Berechnung wohl nicht gekommen, aber was soll's. Am Ende wird die Liste dann als .csv Datei gespeichert.

```python
# Define coordinates of Straubing
straubing_coords = (48.8817, 12.5731)  # Latitude and longitude of Straubing

# Function to calculate distance between two coordinates using Haversine formula
def haversine_distance(lat1, lon1, lat2, lon2):
    R = 6371.0  # Radius of the Earth in kilometers
    lat1 = radians(lat1)
    lon1 = radians(lon1)
    lat2 = radians(lat2)
    lon2 = radians(lon2)
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    distance = R * c
    return distance

# Calculate distance from each peak to Straubing and round to 0 decimals
peaks_data['distance_to_straubing'] = peaks_data.apply(lambda row: round(haversine_distance(row['latitude'], row['longitude'], straubing_coords[0], straubing_coords[1]), 1), axis=1)

# Sort the DataFrame based on distances in ascending order
peaks_data = peaks_data.sort_values(by='distance_to_straubing')

# Define the file name with today's date
file_name = 'peaks_raw_data.csv'

# Export the DataFrame to a CSV file with today's date in the file name and including the index
peaks_data.to_csv(file_name, index=False)
```

Am Ende habe ich also jetzt eine aktuelle [Liste aller Gipfel](/assets/peaks_list.csv) im Bayerischen Wald, sortiert nach der Entfernung zu Straubing und eine [Karte aller Gipfel](/assets/peaks_progress.html) die ich schon gelaufen bin, bzw die geplant sind.
Den Code zum Script könnt ihr auf <a href='https://github.com/johndillinger15/Peaks_Project_Map' class='external' data-umami-event="github" target='_blank' rel='noopener'>GitHub</a> finden.

<br>
