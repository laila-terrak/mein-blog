---
date: "01/22/2025"
title: "Was ist Docker und wofür wird es verwendet?"
description: "In diesem Blog erkläre ich, was Docker ist und wie es verwendet wird."
---

Um zu verstehen, was ***Docker*** macht und welche Vorteile es mit sich bringt, müssen wir zunächst die Probleme verstehen, die vor der Entwicklung von Docker existierten.

## Wie wurden Applikationen vor Docker entwickelt?

Vor der Einführung von Docker musste jeder Entwickler im Team die gesamte Umgebung, einschließlich aller benötigten Services und Abhängigkeiten, die für die Anwendung erforderlich waren, manuell auf seinem lokalen Betriebssystem installieren und konfigurieren. Dies führte oft zu Problemen wie:
1. **Inkompatibilitäten**: Unterschiedliche Betriebssysteme oder Versionen führten dazu, dass die Anwendung bei einem Entwickler funktionierte, bei einem anderen jedoch nicht.
2. **Zeitaufwand**: Das Einrichten und Konfigurieren der Umgebung war aufwendig und fehleranfällig.
3. **Fehlende Konsistenz**: Die Entwicklungs-, Test- und Produktionsumgebungen waren oft nicht identisch, was zu Problemen beim Deployment führte.

Um diese Probleme zu lösen, wurde Docker entwickelt. Aber was genau ist Docker?

## Was ist Docker?

**Docker** ist eine Plattform, die es Entwicklern ermöglicht, Anwendungen und ihre Abhängigkeiten in sogenannten ***Containern*** zu verpacken, zu verteilen und auszuführen. Diese Container sind leichtgewichtig und unabhängig von der zugrunde liegenden Infrastruktur, was bedeutet, dass die Anwendung überall gleich läuft – egal, ob auf dem Entwicklerrechner, einem Server oder in der Cloud.

### Was macht Docker genau?

1. **Containerisierung**: Docker erstellt Container, die ***alles beinhalten***, was eine Anwendung braucht, um zu laufen – wie z. B. Code, Bibliotheken und runtime environment. Container sind ***isoliert***, sodass sie keine anderen Anwendungen auf dem gleichen System beeinflussen.
    
2. **Portabilität**: Ein Docker-Container funktioniert auf jedem System, das Docker unterstützt, unabhängig davon, ob es sich um eine lokale Entwicklungsumgebung oder eine Cloud-Infrastruktur handelt.
    
3. **Effizienz**: Docker-Container sind leichter und schneller als virtuelle Maschinen, da sie den Betriebssystem-Kernel gemeinsam nutzen, anstatt ein vollständiges Betriebssystem zu simulieren.
    
4. **Einfaches Deployment**: Mit Docker können Entwickler ihre Anwendungen und deren Umgebung auf einfache Weise in ein einziges Paket zusammenstellen. Dieses Paket kann dann schnell auf anderen Computern oder Servern ausgeführt werden.

### Docker-Images vs. Docker-Container:

Docker-Images und Docker-Container können zu Verwirrung führen, da sie anfangs ähnlich klingen. Sie sind jedoch unterschiedlich. Hier sind die wichtigsten Unterschiede:

#### 1. ***Docker-Image: Statische Vorlage***

Ein Image ist eine Package, das alles enthält, was  zur Ausführung der Anwendung benötigt wird (Code, Abhängigkeiten, Konfigurationen), aber es ist **statisch** und **nicht ausführbar**.
**Images** sind effizient, um eine Anwendung zu speichern, zu teilen und zu versionieren.

Um herauszufinden, wie viele Docker-Images auf dem System vorhanden sind, kann man  den folgenden Befehl in der Kommandozeile oder im Terminal ausführen:

```shell
 docker images
```

Dieser Befehl listet alle Docker-Images auf dem System auf, zusammen mit Details wie:
- **REPOSITORY**: Der Name des Images.
- **TAG**: Die Version des Images.
- **IMAGE ID**: Eine eindeutige Kennung des Images.
- **CREATED**: Das Erstellungsdatum des Images.
- **SIZE**: Die Größe des Images.
Um nur die Anzahl der Docker-Images zu sehen, kann man den folgenden Befehl verwenden:

```shell
 docker images -q | wc -l
```

- **docker images -q ** gibt nur die **Image IDs** zurück.
- **wc -l** zählt die Zeilen, also die Anzahl der Images.

Dieser Befehl zeigt  die genaue Anzahl der Docker-Images auf dem System.

#### 2. ***Docker-Container: Ausgeführte Instanz des Images***

Ein Container ist eine **laufende Instanz** eines Images. Wenn du ein Docker-Image startest, wird es zu einem Container. Der Container ist **dynamisch**, das heißt, er führt die Anwendung aus und kann Daten und Prozesse verwalten.
**Container** sind effizient, um Anwendungen auszuführen und sie in einer isolierten Umgebung zu betreiben.

Der Befehl `docker ps` zeigt  eine Liste der **aktuell laufenden Docker-Container** auf dem System an. Standardmäßig zeigt `docker ps` nur die Container, die gerade ausgeführt werden.

```shell
 docker ps
```

Dieser Befehl listet alle laufenden Docker-Container auf dem System auf, zusammen mit Details wie:
- **CONTAINER ID**: Die eindeutige ID des laufenden Containers.
- **IMAGE**: Das Docker-Image, aus dem der Container erstellt wurde.
- **COMMAND**: Der Befehl, der im Container ausgeführt wird.
- **CREATED**: Wann der Container erstellt wurde.
- **STATUS**: Der aktuelle Status des Containers (z. B. „Up 5 minutes“).
- **PORTS**: Offene Ports des Containers.
- **NAMES**: Der Name des Containers.
Wenn man auch **stoppte** Container sehen möchte, kann man den Befehl `docker ps -a` verwenden:

```shell
 docker ps -a
```

### Docker Compose:

***Docker Compose*** ist ***ein Tool zum Definieren und Verwalten von Docker-Anwendungen mit mehreren Containern***. Mit Compose kannst du eine ***YAML-Datei*** verwenden, um die Konfiguration der Dienste deiner Anwendung festzulegen. Anschließend lassen sich alle definierten Dienste mit nur einem einzigen Befehl erstellen und starten.

### Beispiel einer YAML-Datei:

![Docker Compose Yaml datei](./public/images/docker-compose-yaml-datei.png)

Hier wird wird ein PostgreSQL-Datenbank-Service definiert. Dabei wird die PostgreSQL-Version 15 aus dem Docker Hub heruntergeladen (gepullt), sobald der Befehl docker-compose up ausgeführt wird.

Der Befehl `docker-compose up` startet alle Container basierend auf der Konfiguration.

```shell
 docker-compose up
```

![docker-compose up](./public/images/docker-compose-up.png)

![laufende Container](./public/images/laufende-container.png)

Der Befehl `docker-compose down` stoppt und entfernt alle gestarteten Container, Netzwerke und Volumes.

```shell
 docker-compose down
```

Der Befehl `docker-compose ps` zeigt die aktuell laufenden Container an.

```shell
 docker-compose ps
```

Der Befehl `docker-compose logs` zeigt die Logs aller Container-Dienste an..

```shell
 docker-compose logs
```

