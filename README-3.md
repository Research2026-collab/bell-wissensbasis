# BELL 2026 · Wissensbasis der Projekte

Webseiten für die Jahreskonferenz BELL am 16. und 17. November 2026 in Hannover. Die Projekte tragen ihre Angaben über ein Formular ein. Die Wissensbasis zeigt diese Angaben für alle Teilnehmenden übersichtlich an und schlägt jedem Projekt passende Gesprächspartner vor.

Die Seiten werden über GitHub Pages veröffentlicht unter
**https://research2026-collab.github.io/bell-wissensbasis/**
Für jede Seite muss der Dateiname an diese Adresse angehängt werden. Eine Startseite ohne Dateinamen gibt es nicht, sie führt zur Meldung „404“.

## Die Seiten

| Datei | Zweck | Für wen |
|---|---|---|
| [BELL_Eingabe.html](https://research2026-collab.github.io/bell-wissensbasis/BELL_Eingabe.html) | Formular, in das die Projekte ihre Angaben eintragen | Projekte vor der Tagung |
| [BELL_Whiteboard_Hell.html](https://research2026-collab.github.io/bell-wissensbasis/BELL_Whiteboard_Hell.html) | Wissensbasis in heller Darstellung, mit Matching-Karten | Alle Teilnehmenden, am Bildschirm |
| [BELL_Whiteboard.html](https://research2026-collab.github.io/bell-wissensbasis/BELL_Whiteboard.html) | Wissensbasis in dunkler Darstellung, ohne Matching-Karten | Alle Teilnehmenden |
| [BELL_Workshop1_Eingabe.html](https://research2026-collab.github.io/bell-wissensbasis/BELL_Workshop1_Eingabe.html) | Eingabe der Kleingruppen in Session 1 (Gelingensfaktoren) | Kleingruppen während der Tagung |
| [BELL_Workshop2_Eingabe.html](https://research2026-collab.github.io/bell-wissensbasis/BELL_Workshop2_Eingabe.html) | Eingabe der Kleingruppen in Session 2 (Hemmende Faktoren) | Kleingruppen während der Tagung |
| [BELL_Workshop_Board.html](https://research2026-collab.github.io/bell-wissensbasis/BELL_Workshop_Board.html) | Ergebnisse der Kleingruppen, laufend aktualisiert | Alle Teilnehmenden |

Die Dateien `html2canvas.min.js` und `jspdf.umd.min.js` sind keine eigenen Seiten. Sie werden für den PDF-Download der Matching-Karten gebraucht und müssen neben den HTML-Dateien liegen.

## Woher die Daten kommen

Alle Eingaben landen in einem Google Sheet. Ein Google Apps Script stellt die Daten für die Seiten bereit. Die Wissensbasis fragt das Sheet alle 15 Sekunden ab, das Workshop-Board alle 25 Sekunden. Neue Einträge erscheinen deshalb ohne Neuladen der Seite. Oben rechts steht, wann zuletzt geprüft wurde und wie viele Projekte vorliegen.

Die beiden Workshop-Eingabeseiten prüfen nach dem Senden, ob der Eintrag wirklich im Sheet angekommen ist. Erst dann erscheint „Gespeichert“. Fehlt die Internetverbindung, bleibt der Text im Formular stehen und kann erneut gesendet werden. Zusätzlich wird jeder Eintrag auf dem jeweiligen Gerät gesichert und ist unten auf der Seite unter „Auf diesem Gerät gesicherte Einträge“ zu sehen.

## Die Wissensbasis

Die Reiter ordnen die Projekte nach Thema, Zielgruppe, Region und Programmlinie. Weitere Reiter zeigen einzelne Felder aller Projekte nebeneinander, etwa Gelingensfaktoren, Geheimtipps oder „Wonach suche ich“. Die „Übersicht“ zeigt jedes Projekt mit allen Angaben.

Der Reiter „Kontakte“ zeigt Ansprechpersonen und Mailadressen. Er enthält nur Projekte, die der Weitergabe ihrer Kontaktdaten zugestimmt haben.

## Matching-Karten

Der Reiter „Matching-Karten“ (nur in `BELL_Whiteboard_Hell.html`) schlägt jedem Projekt bis zu vier Gesprächspartner für die Tagung vor.

**Was auf einer Karte steht**
- was das Projekt sucht
- die vorgeschlagenen Gesprächspartner, jeweils mit dem Satz aus deren Angaben, der den Vorschlag begründet
- die Ansprechpersonen, sofern das Projekt der Kontaktweitergabe zugestimmt hat, sonst der Hinweis „Name nicht freigegeben“
- die Projekte, die umgekehrt vom eigenen Projekt lernen möchten

**Was man damit tun kann**
- „Projekt ansehen“ öffnet alle Angaben des Partners in einem Fenster.
- „Kontakt ansehen“ springt in den Reiter „Kontakte“ und hebt das Projekt dort hervor.
- „Alle Karten als PDF“ lädt eine Datei mit einer Karte pro Seite herunter. Jede einzelne Karte hat oben rechts einen eigenen PDF-Knopf.
- „Drucken“ bleibt als Reserve. Im Druckfenster lässt sich auch „Als PDF speichern“ wählen.

**Wie die Vorschläge entstehen**

Die Seite berechnet die Vorschläge selbst aus den aktuellen Einträgen. Sie vergleicht, was ein Projekt sucht, mit dem, was andere Projekte anbieten oder laut Projektbeschreibung tun. Dafür ordnet sie die Freitexte über Schlagwörter Themenfeldern zu, etwa „Ehrenamt gewinnen“, „Verstetigung & Anschlussförderung“ oder „Ländlicher Raum“. Seltene Anliegen zählen stärker als allgemeine. Hat ein Projekt mehrere Anliegen, bekommt möglichst jedes einen eigenen Partner. Ausdrücklich genannte Zielgruppen und eine ähnliche Wortwahl der Texte fließen ebenfalls ein. Wo es keine guten Partner gibt, zeigt die Karte lieber zwei starke als vier schwache Vorschläge.

Projekte ohne Angaben bei „Suche“ und „Biete“ erhalten keine eigene Karte. Sobald sie die Felder im Formular nachtragen, erscheint ihre Karte beim nächsten Abruf.

**Grenzen**

Die Zuordnung über Schlagwörter ist eine Näherung und kann danebenliegen. Die Vorschläge sind als Gesprächsanlass gedacht und ersetzen kein Gespräch. Eine Stichprobe von zwölf Projekten ergab, dass rund 80 Prozent der Vorschläge plausibel sind (Stand 27. September 2026). Die Prüfliste dazu liegt nicht im Repository.

Die PDF-Bibliotheken liegen im Repository und werden beim Öffnen des Reiters geladen. Ist die Seite einmal geladen, funktioniert der PDF-Download auch ohne Internet.

## Seiten aktualisieren

1. Auf github.com/research2026-collab/bell-wissensbasis „Add file“ und dann „Upload files“ wählen.
2. Die geänderten Dateien hineinziehen. Nur die Dateien, keinen Ordner, damit sie auf der obersten Ebene landen.
3. Auf „Commit changes“ klicken. Gleichnamige Dateien werden ersetzt.
4. Nach einigen Minuten ist die neue Fassung online. Im Browser mit Cmd + Shift + R (Mac) oder Strg + F5 (Windows) neu laden, damit keine alte Fassung angezeigt wird.

Unter „Deployments“ rechts auf der Repository-Seite zeigt ein grüner Haken bei „github-pages“, dass die Veröffentlichung abgeschlossen ist.

## Datenschutz

- Die Matching-Karten zeigen Namen nur bei Einverständnis zur Kontaktweitergabe und keine Mailadressen.
- Mailadressen stehen nur im Reiter „Kontakte“, ebenfalls nur bei Einverständnis.
- **Offener Punkt:** Das Google Apps Script liefert derzeit den vollständigen Datensatz an alle Besucher aus, auch Namen und Mailadressen von Projekten ohne Einverständnis. Die Seiten blenden diese Angaben nur in der Darstellung aus. Über die Entwicklerwerkzeuge des Browsers sind sie trotzdem lesbar. Das Script sollte vor der Tagung so angepasst werden, dass es Kontaktdaten nur bei Einverständnis ausliefert.
- Der frühere „Admin-Modus“ mit Passwort im Quelltext wurde entfernt. Er hatte keine Schutzfunktion.
