---
date: "12/05/2024"
title: "Datenbanken, SQL und Joins erklärt"
description: "In diesem Blogpost erkläre ich  was eine Datenbak, SQL und Joins sind"
heroImage:
  src: ""
  alt: ""
---
# Was ist eine Datenbank?

Eine Datenbank ist ein organisiertes System zur Speicherung, Verwaltung und Abfrage von Daten. Sie ermöglicht es große Mengen an Informationen effizient zu speichern und chnell darauf zuzugreifen, indem sie Daten in einer strukturierten und übersichtlichen Weise anordnet.
## Was ist eine ***relationale*** Datenbank?

Eine relationale Datenbank ist eine strukturierte Sammlung von Daten, die miteinander in Beziehung stehen und in einer organisierten Form gespeichert werden. Diese Daten sind typischerweise in ***Tabellen*** organisiert. Eine Tabelle besteht aus Zeilen und Spalten: Jede Zeile stellt einen Datensatz dar, während jede Spalte einen bestimmten Datentyp speichert (z. B. Namen, Geburtsdaten oder Adressen).

Datenbanken sind vielseitig und können eine Vielzahl von Informationen speichern, ähnlich wie eine Einkaufsliste vor dem Einkaufen. Der Unterschied ist jedoch, dass diese Daten nicht auf Papier, sondern digital in einer Tabelle gespeichert werden, die leicht durchsucht, bearbeitet und aktualisiert werden kann.

Ein einfaches Beispiel wie die Einkaufsliste zeigt uns, wie eine kleine Menge an Informationen organisiert werden kann. Wenn die Liste jedoch länger wird und komplexe Änderungen erforderlich sind – etwa das Hinzufügen oder Entfernen von Artikeln – wird es schwieriger, den Überblick zu behalten.

Stellen wir uns nun vor, wir möchten alle Studierenden einer Universität mit bestimmten Informationen speichern, wie zum Beispiel Vorname, Nachname, Geburtsdatum, Anzahl der Semester und Noten.

Wenn wir für jede Person ein eigenes Blatt Papier benötigen und 1000 Studierende haben, würden wir mit 1000 Blättern arbeiten. Das führt schnell dazu, dass wir den Überblick verlieren. Wenn wir die Daten aktualisieren müssen, ist es ein sehr aufwendiger Prozess, die Daten auf jedem einzelnen Blatt zu ändern. Eine Datenbank löst dieses Problem, indem sie alle Daten zentral speichert und eine einfache Möglichkeit bietet, Informationen zu suchen, zu ändern oder hinzuzufügen, ohne jedes Blatt einzeln bearbeiten zu müssen.

Das untere Bild zeigt ein Beispiel von einer Tabelle in einer Datenbank für ***Studenten***:

![Studenten Tabelle in der Datenbank](/Beispiel-einer-Tabelle-in-einer-Datenbank.jpeg)

# Was ist SQL?

SQL ist die Abkürzung für Structured Query Language, die sich als Standardsprache für die Kommunikation mit relationalen Datenbanken durchgesetzt hat. Mit Hilfe von SQL können Datentabellen erstellt, miteinander verknüpft und editiert werden.

SQL ist besonders mächtig, da es die Grundlage für die Umsetzung von CRUD-Operationen bildet.

## Was ist CRUD?

CRUD steht für Create, Read, Update und Delete:

### Create (Erstellen):

Das Hinzufügen neuer Daten in ein System, z. B. das Erstellen eines neuen Benutzers in einer Datenbank.

Dies erfolgt über die Anweisung INSERT.

```sql
INSERT INTO Studenten (Student_ID, Vorname, Nachname, Geburtsdatum, Semester, Durchschnittsnote) VALUES (1, 'Max', 'Müller', '2000-05-15', 3, 2.7);
```

Dieser Befehl fügt einen neuen Datensatz in die Tabelle Studenten ein, wobei für jede Spalte (wie Student_ID, Vorname, Nachname usw.) der entsprechende Wert angegeben wird.

### Read (Lesen):

Das Abrufen oder Abfragen von Daten aus einem System, z. B. das Anzeigen einer Liste aller Benutzer.

Hier wird  die Anweisung SELECT verwendet.

***1. Alle Datensätze anzeigen:***

Mit diesem Befehl können alle Datensätze in der Tabelle Studenten angezeigt werden.

```sql
SELECT * FROM Studenten;
```

- `*` bedeutet, dass alle Spalten der Tabelle ausgewählt werden.

***2. Nur bestimmte Spalten anzeigen:***

Mit diesem Befehl können nur die Spalten Vorname und Nachname abgerufen werden.

```sql
SELECT Vorname, Nachname FROM Studenten;
```

- Hier werden nur die Daten der Spalten Vorname und Nachname angezeigt, nicht die anderen.

***3. Mit einer Bedingung filtern:***

Dieser Befehl zeigt alle Datensätze aus der Tabelle Studenten, bei denen das Attribut Semester den Wert 1 hat.

```sql
SELECT * FROM Studenten WHERE Semester = 1;
```

- WHERE filtert die Ergebnisse, sodass nur die Studenten im ersten Semester angezeigt werden.

### Update (Aktualisieren):

Das Ändern bestehender Daten, z. B. das Aktualisieren der E-Mail-Adresse eines Benutzers.

Dies geschieht mit der Anweisung UPDATE.

```sql
UPDATE Studenten SET Durchschnittsnote = 2.5 WHERE Student_ID = 1;
```

Dieser Befehl aktualisiert die **Durchschnittsnote** des Studenten mit der ***`Student_ID = 1`** *auf ***2.5***. 
Es ist wichtig, **`WHERE`** zu verwenden, um sicherzustellen, dass nur der gewünschte Datensatz aktualisiert wird, sonst werden  **alle Datensätze in der Tabelle** geändert!
### Delete (Löschen):

Das Entfernen von Daten aus dem System, z. B. das Löschen eines Benutzers aus der Datenbank.

Dafür wird die Anweisung DELETE genutzt.

```sql
DELETE FROM Studenten WHERE Student_ID = 2;
```

Dieser Befehl löscht den ***Datensatz des Studenten mit der `Student_ID = 2`*** aus der Tabelle `Studenten`.
Durch diese CRUD-Operationen ermöglicht SQL eine vollständige Verwaltung von Daten in relationalen Datenbanken.

# Was sind Joins?

Nehmen wir an, dass wir in unserer Datenbank zwei weitere Tabellen haben:
1. Eine 'Kurse'-Tabelle, die die verschiedenen angebotenen Kurse beschreibt.

![Kurse Tabelle in der Datenbank](/kurse-tabelle.png)

2. Die 'StudentenKurse'-Tabelle, die  die Zuordnung zwischen Studenten und Kursen darstellt  und zeigt, welcher Student welchen Kurs belegt. Sie bildet somit die n:m-Beziehung zwischen den beiden Tabellen ab.

![StudentenKurse Tabelle in der Datenbank](/studenten-kurse-tabelle.png)

Nehmen wir an, wir möchten den vollständigen Namen, das Geburtsdatum, den Kursnamen und die Leistungspunkte des Studenten mit der ID 1 ermitteln. Zwar könnte man manuell nach der ID suchen und die gewünschten Daten aus der Tabelle 'Studenten' sowie der Tabelle 'Kurse' entnehmen, doch das ist mühsam und unübersichtlich – insbesondere, wenn viele Daten mit komplexeren, automatisch generierten IDs vorliegen. Hier kommen ***Joins*** ins Spiel.

### Joins:

Ein Join in SQL ist eine Methode, um zwei oder mehrere Tabellen über eine gemeinsame Spalte miteinander zu verknüpfen und Daten aus ihnen abzufragen.

### Welche Arten gibt es?
### INNER JOIN:

Der Inner Join gibt nur die Datensätze zurück, die in beiden beteiligten Tabellen vorhanden sind und die die Join-Bedingung erfüllen.

```sql
SELECT 
    Studenten.Vorname, 
    Studenten.Nachname, 
    Kurse.Kursname, 
    Kurse.LP
FROM 
    Studenten
INNER JOIN 
    StudentenKurse ON Studenten.Studenten_ID = StudentenKurse.Studenten_ID
INNER JOIN 
    Kurse ON StudentenKurse.Kurs_ID = Kurse.Kurs_ID;

```

In einem Venn-Diagramm würde das ganze in etwa so aussehen.
![inner join](/inner-join.png)
### LEFT JOIN (oder LEFT OUTER JOIN):

Der **LEFT JOIN** gibt alle Datensätze der linken Tabelle zurück, auch wenn es in der rechten Tabelle keine Übereinstimmungen gibt. Fehlt eine Übereinstimmung, werden die Werte der rechten Tabelle auf `NULL` gesetzt

In diesem Beispiel werden alle Studenten zurück gegeben auch wenn sie keinen zugewiesenen Kurs haben. Wenn ein Student kein Kurs hat, bleiben der Kursname und die Leistungspunkte `null`

```sql
SELECT 
    Studenten.Vorname, 
    Studenten.Nachname, 
    Kurse.Kursname, 
    Kurse.LP
FROM 
    Studenten
LEFT JOIN 
    StudentenKurse ON Studenten.Studenten_ID = StudentenKurse.Studenten_ID
LEFT JOIN 
    Kurse ON StudentenKurse.Kurs_ID = Kurse.Kurs_ID;

```

In einem Venn-Diagramm würde das ganze in etwa so aussehen.
![left join](/left-join.png)
### RIGHT JOIN (oder RIGHT OUTER JOIN):

Der **RIGHT JOIN** gibt alle Datensätze der rechten Tabelle zurück, auch wenn es in der rechten Tabelle keine Übereinstimmungen gibt. Fehlt eine Übereinstimmung, werden die Werte der rechten Tabelle auf `NULL` gesetzt

In diesem Beispiel werden alle Kurse zurück gegeben auch wenn sie keinen zugewiesenen Studenten haben. Wenn ein Kurs kein Student hat, bleiben der Vorname und der Nachname `null`

```sql
SELECT 
    Studenten.Vorname, 
    Studenten.Nachname, 
    Kurse.Kursname, 
    Kurse.LP
FROM 
    Studenten
RIGHT JOIN 
    StudentenKurse ON Studenten.Studenten_ID = StudentenKurse.Studenten_ID
RIGHT JOIN 
    Kurse ON StudentenKurse.Kurs_ID = Kurse.Kurs_ID;
```

In einem Venn-Diagramm würde das ganze in etwa so aussehen.
![right join](/right-join.png)
### FULL OUTER JOIN:

Der **FULL OUTER JOIN** ist eine Kombination aus dem **LEFT** und **RIGHT JOIN**.
Er gibt alle Daten aus beiden Tabellen zurück, egal ob es Ergebnisse gibt oder nicht.

In diesem Beispiel werden alle Kurse und alle Studenten zurück gegeben auch wenn sie keine Übereinstimmung haben. Fehlende Werte haben den Wert  `null`

```sql
SELECT 
    Studenten.Vorname, 
    Studenten.Nachname, 
    Kurse.Kursname, 
    Kurse.LP
FROM 
    Studenten
FULL OUTER JOIN 
    StudentenKurse ON Studenten.Studenten_ID = StudentenKurse.Studenten_ID
FULL OUTER JOIN 
    Kurse ON StudentenKurse.Kurs_ID = Kurse.Kurs_ID;

```

In einem Venn-Diagramm würde das ganze in etwa so aussehen.
![full join](/full-join.png)
