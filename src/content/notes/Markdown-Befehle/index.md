---
date: "11/01/2024"
title: "Markdown-Befehle"
description: "In dieser Notiz stelle ich die wichtigsten Markdown-Befehle dar "
heroImage:
  src: ""
  alt: ""
---
# Welche Befehle gibt es?

## 1.hashtags :

Die Hashtags entsprechen die Header-Tags in HTML. 
- (#) entspricht `<h1>` in HTML
- (##) entspricht `<h2>` in HTML
- (###) entspricht `<h3>` in HTML
- (####) entspricht `<h4>` in HTML
- (#####) entspricht `<h5>` in HTML
- (######) entspricht `<h6>` in HTML

## 2.Text fett formatieren:

bei mac: text auswählen denn Command + b drücken  oder 2 Sternchen  am Anfang und 2 Sternchen am Ende des Textes hinzufügen.   
**das ist ein fetter Text** 

## 3.Text kursiv formatieren:

bei mac: text auswählen denn Command + i drücken  oder 1 Sternchen  am Anfang und 1 Sternchen am Ende des Textes hinzufügen.   
*das ist ein kursiver Text* 

## 4.Text *kursiv* und **fett** formatieren:

3 Sternchen  am Anfang und 3 Sternchen am Ende des Textes hinzufügen.   
***das ist ein kursiver und fetter Text***

## 5.Bearbeitungs- und Lesemodus:

Mit command + e kann man zwischen dem Bearbeitungs- und Lesemodus wechseln. 

## 6.Listen:

### Ungeordnete Listen:

In Markdown kannst du eine ungeordnete Liste ganz einfach mit dem folgenden Symbole erstellen: `-` 
- das ist eine Ungeordnete Liste 

### Geordnete Listen:

In Markdown kannst du eine geordnete Liste ganz einfach mit dem folgenden Symbole erstellen: `1.` (also zahl und ein Punkt)
1. das ist eine geordnete Liste

## 7.Zitat:

Ein Zitat in Markdown wird mit einem **>** (größer als-Zeichen) eingeleitet. Du kannst es für einzelne Zeilen oder ganze Absätze verwenden. Hier sind einige Beispiele:

### Einfaches Zitat:
>Das ist eine Zitat

### Zitat über mehrere Zeilen:

> Dies ist ein längeres Zitat.    
 > Es erstreckt sich über mehrere Zeilen.

### Zitat innerhalb von Zitat:

> Dies ist ein Zitat. 
> > Dies ist ein verschachteltes Zitat.

## 8.Text markieren:

In Markdown kannst du einen Text markieren indem man den Symbol = zweimal vor dem Text und nach dem Text hinzufügt.
==Das ist ein markierter Text==

## 9.Bild einfügen:

Um ein Bild in Markdown einzufügen, verwendest du die folgende Syntax:
!'[Alt-Text]'(Bild-URL "Titel")
- ![Alt-Text]`: Der alternative Text, der angezeigt wird, falls das Bild nicht geladen werden kann. Auch hilfreich für Barrierefreiheit.
- `(Bild-URL)`: Der Pfad zur Bilddatei (kann lokal oder online gehostet sein).
- `"Titel"`: Ein optionaler Titel, der erscheint, wenn du mit der Maus über das Bild fährst.

## 10.Trennstrich:

Ein Trennstrich in Markdown wird mit **drei oder mehr Bindestrichen**(-), Sternchen(*) oder Unterstrichen(_) erstellt. Diese müssen in einer eigenen Zeile stehen, ohne Text davor oder dahinter.
- Mit Bindestrichen:
---
- Mit Sternchen:
***
- Mit Unterstrichen:
___

## 11.Links:

Um einen Link in Markdown zu erstellen, verwendet man zwei hintereinander eckige Klammern  vor und nach dem Wort 
[[das ist ein link]]
Mit Links kann man verschiedene  Notizen miteinander verknüpfen und so eine Art von Netzwerk oder Struktur erzeugen.

## 12. Code

Um Codeblöcke in Markdown zu erstellen, werden drei Backticks ``` verwendet. Du kannst optional die Programmiersprache angeben, um Syntaxhervorhebungen zu aktivieren.

```java
String x = "Das ist ein Beispiel, wie man einen Code mit Markdown schreibt";
```


