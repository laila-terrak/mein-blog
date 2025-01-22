---
date: "08/01/2024"
title: "Wie baut man ein Accordion mit JavaScript und Tailwind CSS"
description: "Erstelle ein interaktives Accordion mit HTML, Tailwind CSS und JavaScript. Schritt-für-Schritt-Anleitung für Webentwickler zur Gestaltung und Funktionalität eines modernen Accordions auf deiner Webseite."
heroImage:
  src: "/images/accordion-post.png"
  alt: "fertige Accordion Kompenente"
---

In diesem Blogbeitrag werden wir gemeinsam ein interaktives Accordion mit HTML, Tailwind CSS und JavaScript erstellen.

Wir werden Schritt für Schritt durch den gesamten Prozess gehen: von der Strukturierung des Markups mit HTML über das Styling mit Tailwind CSS bis hin zur Implementierung der interaktiven Funktionen mit JavaScript.

## Was ist ein Akkordion?

Ein Accordion ist ein Element auf einer Webseite, das Inhalte ein- und ausklappen lässt. Es hilft, Platz zu sparen und die Seite übersichtlich zu halten. Durch Klicken auf einen Titel oder Button können zusätzliche Informationen angezeigt oder wieder ausgeblendet werden.

## Wie baue ich die HTML Struktur?

Zunächst erstellen wir eine Section, die als äußerer Container für unser Accordion dient. Dieser Container umfasst den gesamten Inhalt des Accordions und trägt dazu bei, eine saubere HTML-Struktur zu gewährleisten.

```html
<!--html -->
<section>
  <!-- Accordion Elemente kommen hierhin -->
</section>
```

Danach erstellen wir für jedes Accordion-Element einen `<div>`, der als Container für den Titel, das Plus-Symbol (den anklickbaren Teil) und den Inhalt (der ein- und ausgeklappt wird) dient.

```html
<!--html -->
<section >
  <div>
    <!-- Titel und Inhalt kommen hierhin -->
  </div>
  <div>
    <!-- Titel und Inhalt kommen hierhin -->
  </div>
  <div>
    <!-- Titel und Inhalt kommen hierhin -->
  </div>
</section>
```

Im nächsten Schritt erstellen wir ein `<button>`-Element, der den Titel und das Plus-Symbol umfasst. Der Button wird verwendet, um den Inhalt ein- und auszuklappen.

```html
<!--html -->
<section>
  <div>
    <button></button>
  </div>
</section>
```

```html
<!--html -->
<section>
  <div>
    <button>
      <h2>Was ist ein Accordion?</h2>
      <svg
        height="24"
        width="24"
        xmlns="http://www.worg/2000/svg"
        viewBox="0 0 20 20"
      >
        <line x1="5" y1="10" x2="15" y2="10"></line>
        <line x1="10" y1="5" x2="10" y2="15"></line>
      </svg>
    </button>
  </div>
</section>
```

Zum Schluss erstellen wir einen `<div>`,der den Inhalt des Accordions enthält, der ein- und ausgeblendet wird.

```html
<!--html -->
<section>
  <div>
    <button></button>
    <div>
      <p>
        Ein Accordion ist ein interaktives Element auf einer Webseite, das es
        ermöglicht, Inhalte ein- und auszuklappen. Es besteht typischerweise aus
        mehreren Abschnitten oder Panels, die jeweils eine Überschrift und einen
        darunter versteckten Inhalt enthalten. Durch Klicken auf die Überschrift
        kann der Benutzer den Inhalt anzeigen oder verbergen. Accordions sind
        besonders nützlich, um lange Inhalte zu strukturieren und die
        Benutzerfreundlichkeit zu verbessern, indem sie Informationen nur bei
        Bedarf anzeigen.
      </p>
    </div>
  </div>
</section>
```

Um das gesamte Accordion zu erstellen, reicht es aus, den gesamten Inhalt des ersten `<div>`-Elements zu kopieren. Hier ist eine Übersicht, wie der vollständige Code am Ende aussehen wird:

```html
<!--html -->
<section>
  <div>
    <button>
      <h2>Was ist ein Accordion?</h2>
      <svg
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <line x1="5" y1="10" x2="15" y2="10"></line>
        <line x1="10" y1="5" x2="10" y2="15"></line>
      </svg>
    </button>

    <div>
      <p>
        Ein Accordion ist ein interaktives Element auf einer Webseite, das es
        ermöglicht, Inhalte ein- und auszuklappen. Es besteht typischerweise aus
        mehreren Abschnitten oder Panels, die jeweils eine Überschrift und einen
        darunter versteckten Inhalt enthalten. Durch Klicken auf die Überschrift
        kann der Benutzer den Inhalt anzeigen oder verbergen. Accordions sind
        besonders nützlich, um lange Inhalte zu strukturieren und die
        Benutzerfreundlichkeit zu verbessern, indem sie Informationen nur bei
        Bedarf anzeigen.
      </p>
    </div>
  </div>
  <div>
    <button>
      <h2>Was ist Tailwind?</h2>
      <svg
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <line x1="5" y1="10" x2="15" y2="10"></line>
        <line x1="10" y1="5" x2="10" y2="15"></line>
      </svg>
    </button>

    <div>
      <p>
        Tailwind CSS ist ein stark konfigurierbares CSS-Framework, das auf einem
        Utility-First-Prinzip basiert. Anstatt vordefinierte Komponenten und
        Designs bereitzustellen, wie es bei traditionellen Frameworks der Fall
        ist, bietet Tailwind eine Reihe von Utility-Klassen, mit denen
        Entwickler ihre eigenen Designs schnell und effizient umsetzen können.
        Durch die Verwendung von Tailwind können Entwickler konsistente,
        responsive Layouts erstellen, ohne dass sie viel Zeit mit der Anpassung
        von CSS-Dateien verbringen müssen.
      </p>
    </div>
  </div>
  <div>
    <button>
      <h2>Was ist JavaScript?</h2>
      <svg
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <line x1="5" y1="10" x2="15" y2="10"></line>
        <line x1="10" y1="5" x2="10" y2="15"></line>
      </svg>
    </button>

    <div>
      <p>
        JavaScript ist eine vielseitige Programmiersprache, die hauptsächlich
        für die Entwicklung von interaktiven und dynamischen Webinhalten
        verwendet wird. Sie ermöglicht es Entwicklern, Funktionen wie das
        Anzeigen von Pop-ups, das Validieren von Formularen und das dynamische
        Aktualisieren von Inhalten auf Webseiten zu implementieren. JavaScript
        läuft direkt im Browser des Benutzers und wird häufig in Kombination mit
        HTML und CSS verwendet, um moderne, reaktionsfähige Webseiten zu
        erstellen.
      </p>
    </div>
  </div>
</section>
```

## Wie Style ich mein HTML mit Tailwind?

Ohne Tailwind CSS, wird unser Accordion so aussehen:

![Accordion ohne CSS](./public/images/accordion-ohne-css.png)

Mit Tailwind CSS können wir das Accordion einfach und effizient stylen. Hier einige der wichtigen Klassen, die wir verwenden:

```html
<!--html -->
<section class="mx-20 px-4 py-20 flex flex-col gap-3">
<!-- Accordion Elemente kommen hierhin -->
</section>
```

mx-20: Setzt das Margin auf rechten und linken Seite des Accordions auf 80px.
px-4 py-20: Setzt das Padding für das Accordion, 16px auf der X-Achse und 80px auf der Y-achse.
flex: aktiviert das Flexbox-Layout für das `<section>` Element.
flex-col: Die Elemente werden vertikal angeordnet, d.sh. die Flex-Items werden untereinander gestapelt.
gap-3: fügt einen gleichmäßigen Abstand von 12 px zwischen den Flex-Items im Container hinzu.

```html
<!--html -->
<section class="mx-20 px-4 py-20 flex flex-col gap-3">
  <div class="py-4 px-6 border border-laser-500 rounded-2xl"></div>
</section>
```

px-6 py-4: Setzt das Padding für das Accordion, 24px auf der X-Achse und 16px auf der Y-achse.
border: fügt dem `<div>` Element eine standardmäßige 1px breite Umrandung (Border) hinzu
border-laser-500: bestimmt die Farbe der Umrandung. In diesem Fall handelt es sich um eine benutzerdefinierte Farbe.
rounded-2xl: Die Ecken des Elements werden stark abgerundet, was dem Design ein weicheres, moderneres Aussehen verleiht.

```html
<!--html -->
<section class="mx-20 px-4 py-20 flex flex-col gap-3">
  <div class="py-4 px-6 border border-laser-500 rounded-2xl">
    <button class="accordion-btn w-full flex flex-row justify-between items-center text-xl font-bold"></button>
  </div>
</section>
```

accordion-btn: Diese Klasse dient dazu, den Button im JavaScript-Code zu identifizieren. Damit können wir später gezielt auf den Button zugreifen und ihm Interaktivität verleihen.
w-full: Diese Klasse sorgt dafür, dass der Button die volle Breite seines Elterncontainers einnimmt. Dadurch passt sich der Button automatisch an die Breite des umgebenden Elements an
flex-row: Diese Klasse legt fest, dass die Elemente innerhalb des Buttons (z.B. der Text und das Icon) horizontal nebeneinander (in einer Reihe) angeordnet werden.
justify-between: Diese Klasse verteilt die Elemente im Button so, dass sie möglichst weit voneinander entfernt sind, also eines links und eines rechts angeordnet wird.
items-center: Diese Klasse richtet die Elemente innerhalb des Buttons vertikal zentriert aus, sodass sie auf einer Höhe liegen. Das sorgt dafür, dass der Text und das Icon optisch gut ausgerichtet sind.
text-xl: Diese Klasse setzt die Schriftgröße des Textes auf 20 px.
font-bold: Diese Klasse macht den Text fett, was die Lesbarkeit verbessert und den Button optisch hervorhebt.

```html
<!--html -->
<section class="mx-20 px-4 py-20 flex flex-col gap-3">
  <div class="py-4 px-6 border border-laser-500 rounded-2xl">
    <button class="accordion-btn w-full flex flex-row justify-between items-center text-xl font-bold">
      <h2>Was ist ein Accordion?</h2>
      <svg
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="accordion-icon text-2xl"
      ></svg>
    </button>
  </div>
</section>
```

accordion-icon: Diese Klasse dient dazu, das Icon im JavaScript-Code gezielt anzusprechen. Dadurch können wir das Icon später seinen Zustand (z.B. gedreht oder normal) abhängig von der Accordion-Interaktion verändern.
text-2xl: Diese Klasse bestimmt die Größe des Icons. Sie setzt die Schriftgröße auf 24px. Da Icons in SVG-Form als Text behandelt werden, beeinflusst diese Klasse direkt die Größe des Icons, sodass es im Accordion-Button gut sichtbar ist.

```html
<!--html -->
<section class="mx-20 px-4 py-20 flex flex-col gap-3">
  <div class="py-4 px-6 border border-laser-500 rounded-2xl">
    <button class="accordion-btn w-full flex flex-row justify-between items-center text-xl font-bold">
      <h2>Was ist ein Accordion?</h2>
      <svg
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="accordion-icon text-2xl"
      >
        <line
          x1="5"
          y1="10"
          x2="15"
          y2="10"
          class="stroke-black stroke-2 origin-center"
        ></line>
        <line
          x1="10"
          y1="5"
          x2="10"
          y2="15"
          class="stroke-black stroke-2 origin-center"
        ></line>
      </svg>
    </button>
  </div>
</section>
```

stroke-black: Diese Klasse legt die Farbe der Konturlinien (also der "Strokes") auf Schwarz fest. Das bedeutet, dass alle Linien, die das SVG-Element zeichnet, in schwarzer Farbe angezeigt werden. In SVGs wird stroke verwendet, um die Farbe der Umrandung von Formen oder Linien zu definieren.
stroke-2: Diese Klasse bestimmt die Breite der Linien auf 2 Pixel. Die Zahl 2 gibt die Dicke der Linie an, die in diesem Fall etwas dicker als die Standardlinie ist. Das verleiht dem Icon eine stärkere visuelle Präsenz und macht die Linien besser sichtbar.

## Wie füge ich Funktionalität zu meinem HTML Code hinzu?

Damit unser Accordion funktioniert, müssen wir JavaScript hinzufügen, um den Inhalt bei einem Klick auf die Überschrift ein- oder auszublenden.

Zuerst müssen wir auf alle Buttons zugreifen, die das Accordion steuern. Dazu verwenden wir die querySelectorAll()-Methode, die alle Elemente mit einer bestimmten CSS-Klasse zurückgibt. Um alle Buttons mit der Klasse accordion-btn zu erfassen, deklarieren wir eine Variable namens accordionButtons und speichern darin das Ergebnis von querySelectorAll():

```js
// javaScript
const accordionButtons = document.querySelectorAll(".accordion-btn");
```

Auf ähnliche Weise greifen wir auf unsere Icons zu, damit wir sie bei Bedarf drehen können. Wir speichern die Icons in einer Variable namens accordionIcons:

```js
// javaScript
const accordionIcons = document.querySelectorAll(".accordion-icon");
```

Schließlich müssen wir auch die Container erfassen, die den ein- und ausblendbaren Inhalt des Accordions enthalten. Wir verwenden erneut querySelectorAll() und speichern die Container in einer Variablen namens accordionContents:

```js
// javaScript
const accordionContents = document.querySelectorAll(".accordion-content");
```

Jetzt, da wir Zugriff auf alle benötigten Elemente haben, können wir mit der Implementierung beginnen.

wir verwenden die `forEach()`-Methode, die jedes Element in der `accordionButtons`-Liste durchläuft.

```js
accordionButtons.forEach((btn, index) => {});
```

`(btn, index) => {}`: Dies ist eine Pfeilfunktion (Arrow Function),die für jedes Element in accordionButtons ausgeführt wird. Sie nimmt zwei Parameter:

`btn`: Dies ist der aktuelle Button, über den in der Iteration gegangen wird.
`index`: Dies ist der Index (die Position) des aktuellen Buttons in der `accordionButtons`-Liste.

Für jeden Button (`btn`) wird ein Event Listener hinzugefügt, der auf das click-Ereignis wartet.

```js
accordionButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {});
});
```

Wenn der Button geklickt wird, wird die Funktion im Inneren des Event Listeners aufgerufen, die dafür sorgt, den Content ein und auszublenden.

```js
accordionButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    toggleAccordion(index);
  });
});
```

Die Funktion erhält den `ìndex` des geklickten Button als Parameter. Der index dient als Referenz, um zu wissen, welcher Button geklickt wurde und welchen Inhalt die Funktion ein- oder ausblenden soll.

Die `toggleAccordion`Funktion, die mit dem addEventListener aufgerufen wird, muss irgendwo deklariert sein sonst ist sie nicht aufrufbar. Das machen wir, indem wir die Funktion so deklarieren:

```js
// javaScript
function toggleAccordion(index) {
  // Hier wird später die Logik hinzugefügt, um den Inhalt ein- oder auszublenden
}
```

In einem früheren Schritt haben wir unsere Icons ausgewählt und in der Variablen `accordionIcons` gespeichert. Nun können wir diese Icons so drehen, dass sie abwechselnd ein Plus-Symbol und ein Kreuz-Symbol anzeigen, jedes Mal, wenn wir auf einen Button klicken.

Wie bei IccordionButtons werden wir the `forEach()`Methode verwenden, um durch jedes Element in der `accordionIcons`Liste zu itterieren.

```js
// javaScript
function toggleAccordion(index) {
  accordionIcons.forEach((icon, i) => {
    // Hier wird später die Logik hinzugefügt, um die Icons zu drehen.
  });
}
```

`(icon, i) => {}`: Dies ist eine Arrow Function,die für jedes Element in accordionIcons ausgeführt wird. Sie nimmt zwei Parameter:

`icon`: Dies ist das aktuelle Icon, über das in der Iteration gegangen wird.
`i`: Dies ist der Index (die Position) des aktuellen Icons in der `accordionIcons`-Liste.

Die Verdrehung der Icons können wir erreichen, indem wir
`icon.classList.toggle("rotate-45")` Methode verwenden.Wenn das icon-Element nicht die Klasse "rotate-45" hat, wird die Klasse hinzugefügt, und das Icon könnte dann z. B. um 45 Grad gedreht werden.
Wenn das icon-Element bereits die Klasse "rotate-45" hat, wird die Klasse entfernt, und das Icon würde in seinen ursprünglichen Zustand zurückkehren.

```js
// javaScript
function toggleAccordion(index) {
  accordionIcons.forEach((icon, i) => {
    icon.classList.toggle("rotate-45");
  });
}
```

Die oben beschriebene Logik funktioniert problemlos, solange wir zuerst den ersten Button klicken. Wenn wir jedoch stattdessen den zweiten Button klicken, stellen wir fest, dass sich das Icon des ersten Buttons ebenfalls mitdreht. Dasselbe Problem tritt auf, wenn wir den dritten Button klicken.

Das Problem können wir beheben, indem wir eine if-Bedingung verwenden, die zuerst überprüft, ob der Index des Buttons genau mit dem Index (i) des Icons übereinstimmt. Wenn diese Bedingung wahr ist, darf das Icon gedreht werden.

```js
// javaScript
function toggleAccordion(index) {
      accordionIcons.forEach((icon, i) => {
        if (i === index) {
          icon.classList.toggle("rotate-45");
        }
      });
```

jetzt müssen wir nur noch den Content des geklickten Buttons anzeigen. Dafür benötigen wir die Variable `accordionContents`, die wir in einem früheren Schritt erstellt haben.
Wie bei `accordionButtons` und `accordionIcons` werden wir auch hier die `forEach()`Methode verwenden, um durch jedes Element in der `accordionContents`Liste zu itterieren.

```js
// javaScript
accordionContents.forEach((content, i) => {
  // Hier wird später die Logik hinzugefügt, um die Contents anzuzeigen.
});
```

Die Arrow-Funktion `(content, i) => {}` wird für jedes Element in `accordionContents` ausgeführt. Sie nimmt zwei Parameter entgegen:

`content`: Dies ist der aktuelle Inhalt, über den in der Iteration gegangen wird.
`i`: Dies ist der Index (die Position) des aktuellen Inhalts in der `accordionContents-Liste`.

Die Anzeige des Inhalts können wir erreichen, indem wir die Methode `content.classList.toggle("hidden")` verwenden. Wenn das Content-Element nicht die Klasse "hidden" hat, wird die Klasse hinzugefügt, und der Inhalt wird ausgeblendet. Wenn das Content-Element bereits die Klasse "hidden" hat, wird die Klasse entfernt, und der Inhalt wird angezeigt.

```js
// javaScript
accordionContents.forEach((content, i) => {
  content.classList.toggle("hidden");
});
```

Das Problem bei diesem Code ist, dass beim Versuch, den Inhalt eines Buttons anzuzeigen, auch die Inhalte der anderen Buttons angezeigt werden.

Dieses Problem können wir beheben, indem wir eine if-Bedingung verwenden, die zunächst überprüft, ob der Index des Buttons mit dem Index des Inhalts übereinstimmt. Wenn diese Bedingung erfüllt ist, wird nur der entsprechende Inhalt angezeigt.

```js
accordionContents.forEach((content, i) => {
  if (i === index) {
    content.classList.toggle("hidden");
  }
});
```

Unser Accordion funktioniert soweit gut, es gibt jedoch eine Kleinigkeit, die wir noch verbessern können. Wir möchten, dass beim Anzeigen des Inhalts eines Buttons die anderen Inhalte automatisch versteckt bleiben.

Aktuell verhält es sich so:

Das Können wir erreichen indem wir eine `else`Bedingung erstellen, die überprüft,ob der Index des Buttons mit dem Index des Inhalts nicht übereinstimmt. Wenn diese Bedingung erfüllt ist,bleibt der entsprechende Inhalt verborgen.

```js
else {
          content.classList.add("hidden");
        }
```

Hier finden Sie den vollständigen Code noch einmal zur Ansicht:

```js
// javaScript
const accordionButtons = document.querySelectorAll(".accordion-btn");
const accordionIcons = document.querySelectorAll(".accordion-icon");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    toggleAccordion(index);
  });
});

function toggleAccordion(index) {
  accordionIcons.forEach((icon, i) => {
    if (i === index) {
      icon.classList.toggle("rotate-45");
    }
  });
  accordionContents.forEach((content, i) => {
    if (i === index) {
      content.classList.toggle("hidden");
    } else {
      content.classList.add("hidden");
    }
  });
}
```
