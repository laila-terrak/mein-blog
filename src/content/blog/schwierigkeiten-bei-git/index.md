---
date: "01/13/2025"
title: "Wie ich beinahe mein gesamtes Projekt verloren hätte"
description: "Ein Erfahrungsbericht darüber, wie ein kleiner Fehler im Umgang mit Git beinahe zur Katastrophe geführt hat – und was ich daraus gelernt habe."

---
### Was habe ich versucht zu schaffen?
Am Anfang meines Projekts habe ich mich auf das Backend konzentriert und ein Repository namens `cleaning-crm` erstellt. Danach habe ich mit Vite und React einen Frontend-Ordner innerhalb des Backend-Ordners angelegt. Soweit so gut, bis ich versucht habe, den Frontend-Ordner in das bestehende Repository zu pushen. Dabei stieß ich jedoch auf folgenden Fehler:  
![Fehler beim pushen](./public/images/fehler-beim-pushen.png)
Nachdem ich mich schlau gemacht habe und diverse Google-Tipps gelesen habe, um das Problem zu lösen, entschiede ich mich für den Befehl  `git push -f origin main` Doch dabei habe ich einen entscheidenden Fehler gemacht:

**Was ist passiert**
Durch den Befehl `git push -f origin main` habe ich meine gesamte commit Historie überschrieben und den von mir geschriebenen Backend-Code mit dem neu hinzugefügtem Frontend-Code überschrieben.

**Was war das Problem?**  
Im von Vite erstellten Frontend-Ordner habe ich versehentlich erneut `git init` ausgeführt, ohne daran zu denken, dass der Hauptordner(Backend-ordner), in dem sich mein Frontend-Ordner befindet, bereits als Repository initialisiert war. Anschließend habe ich `git add .` eingegeben und versucht, alles zu pushen. Als das nicht funktionierte, habe ich es mit `git push -f origin main` erzwungen.

**Wie ich es gelöst habe**
1. **Git-Ordner im Frontend löschen:**  
    Im Frontend-Ordner habe ich mit dem Befehl `rm -rf .git` die unnötige Git-Initialisierung entfernt.
2. **Fehlerhaften Commit rückgängig machen:**  
    Mit `git log` habe ich die Liste der Commits angesehen und den fehlerhaften Commit identifiziert.  
    ![git log](./public/images/git-log.png)
    
    Anschließend habe ich den fehlerhaften Commit mit `git revert <commit-hash>` rückgängig gemacht.
3. **Neuer Commit und Push:**  
    Danach habe ich sauber einen neuen Commit erstellt und diesen schließlich  erfolgreich gepusht.
    

**Was habe ich daraus gelernt?**

1. **`git add .` ist gefährlich:**  
    Ein unüberlegtes `git add .` kann schnell Chaos verursachen, besonders wenn man nicht genau weiß, was hinzugefügt wird.
    
2. **Pull Requests und Branches nutzen:**  
    Hätte ich von Anfang an mit Pull Requests oder separaten Branches gearbeitet, wäre der Fehler einfacher zu beheben gewesen und hätte nicht das ganze Repository beeinflusst.
    
3. **Nicht blind Befehle aus dem Internet übernehmen:**  
    Besonders gefährlich sind Befehle mit `-f` oder `--force`. Ohne ein genaues Verständnis davon, was sie tun, sollte man sie besser meiden.
    
4. **Git-UI ist keine Schande:**  
    Man muss nicht alles im Terminal machen. Eine Git-Benutzeroberfläche kann dabei helfen, Änderungen übersichtlich zu verfolgen und Fehler zu vermeiden.