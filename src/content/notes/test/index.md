---
date: "09/30/2024"
title: "test test"
description: ""
---
# was ist Git und GitHub?

Git und GitHub sind nicht dasselbe. Viele Entwickler denken jedoch fälschlicherweise, dass sie identisch sind. 
## 1.Git:
### 1.1.Was ist Git?

Git ist eine ***Software***, die auf dem Computer installiert werden muss. Auf vielen macOS- und Linux-Systemen ist Git jedoch oft schon vorinstalliert. 
Git ist ein ***Versionskontrollsystem***. Es speichert nicht nur die Projekte, sondern verfolgt auch jede Änderung, die man macht. Dadurch kann man jederzeit zu früheren Versionen zurückkehren oder Änderungen vergleichen.
alle Änderungen und Versionen werden  standardmäßig **lokal auf dem Computer** gespeichert. Niemand hat Zugriff darauf, außer der user selbst.

### 1.2.Überprüfen, ob Git installiert ist

Um zu überprüfen, ob **Git** auf dem Computer installiert ist, kann man im Terminal den folgenden Befehl eingeben:

```shell
 git --version
```

Wenn Git installiert ist, wird eine Ausgabe angezeigt, die etwa so aussieht:

```shell
 git version 2.39.5 (Apple Git-154)
```

Wenn Git nicht installiert ist, wird eine Ausgabe angezeigt, die etwa so aussieht:

```shell
 git: command not found
```

### 1.3.Git-Konfiguration:

Die **Git-Konfiguration** ermöglicht es uns, Git auf unseren persönlichen Bedarf einzustellen, wie zum Beispiel den Namen und die E-Mail-Adresse, die mit unseren Commits (Änderungen) verknüpft werden. Um Git richtig zu konfigurieren, müssen folgende Schritte durchgeführt werden:

- Name und E-Mail-Adresse festlegen:
Gib im Terminal die folgenden Befehle ein, um deinen Namen und deine E-Mail-Adresse für Git festzulegen:

```shell
 git config --global user.name "Dein Name"
 git config --global user.email "deine.email@example.com"
```

- Überprüfen der Konfiguration:
Um zu überprüfen, ob die Konfiguration erfolgreich war, kannst du folgenden Befehl eingeben:

```shell
 git config --list
```

Das zeigt eine Liste der aktuellen Git-Konfigurationen an.

```shell
user.name=Dein Name
user.email=deine.email@example.com
```
