---
date: "10/13/2024"
title: "Git"
description: "In dieser Notiz erkläre ich was Git ist"
heroImage:
  src: ""
  alt: ""
---
# was ist Git? 

Git ist eine ***Software***, die auf dem Computer installiert werden muss. Auf vielen macOS- und Linux-Systemen ist Git jedoch oft schon vorinstalliert. 
Git ist ein ***Versionskontrollsystem***. Es speichert nicht nur die Projekte, sondern verfolgt auch jede Änderung, die man macht. Dadurch kann man jederzeit zu früheren Versionen zurückkehren oder Änderungen vergleichen.
alle Änderungen und Versionen werden  standardmäßig **lokal auf dem Computer** gespeichert. Niemand hat Zugriff darauf, außer der user selbst.

# Überprüfen, ob Git installiert ist

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

# Git-Konfiguration:

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
