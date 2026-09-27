// ════════════════════════════════════════════════════════════════
// BELL 2026 · Faktorenlisten für die Workshops
//
// Diese Datei wird von den beiden Eingabeseiten und vom Workshop-Board
// gemeinsam genutzt. Um die Auswahl zu ändern, nur hier Einträge
// hinzufügen, löschen oder umbenennen.
//
// Jeder Faktor hat drei Angaben:
//   name      so heißt der Faktor im Formular und auf dem Board
//   projekte  wie viele Projekte ihn in der Wissensbasis nennen
//   zitat     ein kurzes Originalzitat aus der Wissensbasis
//
// Achtung: Wird ein Faktor umbenannt, nachdem schon Einträge
// gesendet wurden, erscheinen diese auf dem Board unter „Weitere Einträge“.
// ════════════════════════════════════════════════════════════════

// Zahl der Projekte, auf denen die Auswertung beruht
window.BELL_BASIS = 40;

window.BELL_FAKTOREN = {

  // Session 1 · Gelingensfaktoren
  '1': [
    { name: 'An Interessen und Alltag anknüpfen', projekte: 18,
      zitat: 'Themen mit unmittelbarem Bezug zur eigenen Lebenssituation' },
    { name: 'Vertrauen, Verlässlichkeit und Kontinuität', projekte: 18,
      zitat: 'Verlässliche Ansprechpartnerinnen und der kontinuierliche Austausch schaffen Vertrauen' },
    { name: 'Persönliche Ansprache und Beziehungsaufbau', projekte: 18,
      zitat: 'Die persönliche Ansprache, die individuelle Einladung funktioniert deutlich besser als anonyme Flyer-Verteilung' },
    { name: 'Wertschätzung und Begegnung auf Augenhöhe', projekte: 16,
      zitat: 'Ältere wollen als Expert:innen für ihr eigenes Leben ernst genommen und gehört werden.' },
    { name: 'Beteiligung und Mitgestaltung', projekte: 16,
      zitat: 'Ein wesentlicher Erfolgsfaktor ist die aktive Mitgestaltung durch die Teilnehmenden.' },
    { name: 'Netzwerke und Kooperationen vor Ort', projekte: 15,
      zitat: 'Kooperationen mit lokalen Akteuren, kurze Wege und eine gute Vernetzung in den Städten' },
    { name: 'Zeit, Geduld und eigenes Tempo', projekte: 14,
      zitat: 'Die Teilnehmenden sollen Fragen stellen, Dinge ausprobieren und auch Fehler machen können.' },
    { name: 'Niedrigschwellig und gut erreichbar', projekte: 12,
      zitat: 'Besonders wichtig sind niedrigschwellige und bedarfsgerechte Angebote, die sich an der Lebenssituation der älteren Menschen orientieren.' },
  ],

  // Session 2 · Hemmende Faktoren
  '2': [
    { name: 'Gesundheit, Hören, Sehen und Mobilität', projekte: 17,
      zitat: 'Nicht alle Teilnehmenden können Angebote selbstständig erreichen oder längere Wege zurücklegen.' },
    { name: 'Sehr unterschiedliche Voraussetzungen in der Gruppe', projekte: 16,
      zitat: 'Was für eine Person selbstverständlich ist, braucht für eine andere mehr Zeit und Wiederholung.' },
    { name: 'Menschen erreichen und gewinnen', projekte: 15,
      zitat: 'Wir erreichen vor allem bildungsaffine Personen, der Zugang zu in der Gesellschaft teilweise "unsichtbaren" Menschen ist erschwert.' },
    { name: 'Skepsis, Unsicherheit und Berührungsängste', projekte: 13,
      zitat: 'Eine der Hauptherausforderungen … ist es, den Eindruck zu vermeiden, man wolle belehren und erziehen.' },
    { name: 'Begrenzte Zeit und Personal', projekte: 10,
      zitat: 'Eine weitere Herausforderung ist es, diese persönliche Ansprache mit den begrenzten zeitlichen Ressourcen des Projekts zu verbinden.' },
    { name: 'Sprache und Verständlichkeit', projekte: 10,
      zitat: 'Sprachliche Barrieren erschweren tiefere Gespräche; Übersetzungen durch Frauen helfen, kosten aber Zeit.' },
    { name: 'Barrieren bei Orten und Wegen', projekte: 9,
      zitat: 'Umgang mit Hörbeeinträchtigungen und Hörgeräten in Kombination mit schlechter Akustik der Veranstaltungsorte' },
    { name: 'Verbindlichkeit und Planbarkeit der Teilnahme', projekte: 8,
      zitat: 'Einbindung vieler Senior:innen in die familienbezogene Arbeit (z.B. Betreuung der Enkel)' },
    { name: 'Fragebögen und Nachweispflichten der Förderung', projekte: 7,
      zitat: 'Eine zentrale Herausforderung ist der Spagat zwischen vertrauensvoller Beziehungsarbeit und formalen Anforderungen.' },
  ],
};

// Aufgabenstellung, die über dem Formular und auf dem Board steht
window.BELL_AUFGABE = {
  '1': 'Wählen Sie die Gelingensfaktoren aus, die in Ihrer Gruppe besonders wichtig waren. Notieren Sie zu jedem Faktor kurz, wie er in Ihrer Praxis konkret aussieht, etwa ein Beispiel oder einen Tipp.',
  '2': 'Wählen Sie die hemmenden Faktoren aus, die in Ihrer Gruppe besonders wichtig waren. Notieren Sie zu jedem Faktor kurz, wo Sie an eine Grenze stoßen. Wenn Sie mögen, formulieren Sie zum Schluss eine Frage an die Geragogik.',
};

// Session 2: zusätzliches Feld für die Frage an die Geragogik (true = anzeigen)
window.BELL_FRAGE_GERAGOGIK = { '1': false, '2': true };
