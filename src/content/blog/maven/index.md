---
date: "12/30/2024"
title: "Maven für Java-Projekte: Einführung und Anwendung"
description: "Maven ist ein leistungsstarkes Build-Tool für Java-Projekte. In diesem Beitrag zeigen wir, wie es funktioniert und wofür es verwendet wird."
heroImage:
  src: "/accordion-post.png"
  alt: "fertige Accordion Kompenente"
---
# Was ist Maven?

Maven ist ein Build-Tool (ein Tool zum Kompilieren, Testen und Deployen), das das Leben von Entwicklern einfacher macht. 
Hier sind die wichtigsten Vorteile, die Maven mit sich bringt:

## ***1.  Projekt Struktur :***

Maven hilft uns, das Java-Projekt in einer **festgelegten Struktur** zu organisieren. Zum Beispiel:
- **src/main/java**: Hier kommen die Java-Dateien hin.
- **src/test/java**: Hier kommen Tests hin (wenn man welche hat).
Dadurch wird das Projekt übersichtlich, und man weiß immer, wo was hingehört.

***Beispiel*** einer Projektstruktur mit Maven:
![Projekt Struktur](/maven-projekt-struktur.png)

## ***2. Abhängigkeiten (Dependencies) :***

Ohne Maven müssen wir Bibliotheken manuell herunterladen, speichern und in das Projekt einbinden, was aufwendig und zeitintensiv sein kann.  
Mit Maven reicht es, in der Datei **pom.xml** (pom steht für Project Object Model) anzugeben, welche Bibliotheken benötigt werden. Maven lädt diese dann automatisch aus dem Internet herunter und bindet sie in das Projekt ein. 

***Beispiel*** einer pom.xml Datei in Maven:

![Projekt Struktur](/pom.xml-datei.png)

***Beispiel*** von einer ***dependency*** in Maven:

```xml
<dependency>  
    <groupId>org.springframework.boot</groupId>  
    <artifactId>spring-boot-starter-web</artifactId>  
</dependency>
```
Dieser **Dependency-Block** fügt dem Maven Projekt das **Spring Boot Starter Web**-Paket hinzu, das eine Sammlung von Abhängigkeiten bereitstellt, die man benötigt, um eine Webanwendung mit Spring Boot zu erstellen.

## ***3. Bauen und Ausführen:***

Maven kann ein Projekt **bauen** (build), alle Java-Dateien in ausführbare Dateien (z. B. eine `.jar`-Datei) umwandeln. Es kann auch Tests ausführen und sicherstellen, dass alles funktioniert.
  ### Ausführen (run):
Es gibt zwei Möglichkeiten, das Projekt auszuführen:  
Die erste Möglichkeit ist der grüne 'Run'-Button oben rechts in ***IntelliJ***.  
Die zweite Möglichkeit ist der Maven-Befehl `./mvnw spring-boot:run` im Terminal.
Wenn Sie eine der oben genannten Methoden durchführen, sollten Ihnen folgende Ergebnisse angezeigt werden:

![Projekt Struktur](/run-projekt.png)
### Bauen (build):
Um das Projekt zu bauen, müssen wir über das Terminal zu unserem Projektverzeichnis navigieren. Anschließend bauen und packen wir das Projekt mit dem folgenden Maven-Befehl. Dieser kompiliert den Code, führt Tests aus und erstellt eine JAR-Datei im 'target'-Ordner.

```dash
mvn clean install
```

Eine JAR-Datei kann einfach an andere Benutzer oder Server weitergegeben werden, die dann das Java-Programm ausführen können, ohne dass der gesamte Quellcode oder die Projektstruktur erforderlich ist.