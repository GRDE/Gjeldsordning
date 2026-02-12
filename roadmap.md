# Roadmap - Gjeldsordning Veileder

Dette dokumentet beskriver planlagte funksjoner og forbedringer for applikasjonen.

## Prioritert (Neste fase)

### 1. Utskriftsvennlig Design 🖨️
- Lage egne CSS-stilregler for `@media print`.
- Skjule navigasjon, knapper og footer på utskrift.
- Sørge for at "Søknadsutkast" (Steg 5) ser ut som et formelt brev på papir.

### 2. Validering av Skjemaer ✅
- Implementere strengere validering (f.eks. med Zod).
- Hindre brukere i å gå videre før påkrevde felt er fylt ut.
- Bedre feilmeldinger ved ugyldig input (f.eks. negative tall i budsjett).

### 3. Hjelpetekster og Veiledning ℹ️
- Legge til "Tooltips" på vanskelige begreper (f.eks. "Namsmannen", "Sikret gjeld").
- Utvide tekstene på hvert steg for å gi mer kontekst.
- Legge til en FAQ-seksjon.

### 4. Forbedret PDF Generering 📄
- Legge til en logo eller topptekst.
- Bedre formatering av tabeller (gjeldslister).
- Mulighet for å velge hva som skal inkluderes i PDF-en.

## Fremtidige ønsker (Backlog)

### Universell Utforming (UU)
- Gjennomgang av fargekontraster.
- Teste med skjermleser.
- Sikre full tastaturnavigasjon.

### Mobilvennlighet
- Ytterligere optimalisering av tabeller på små skjermer.
- Bedre touch-targets for knapper.

### Teknisk
- Automatiske tester (Playwright/Jest).
- Refactoring av store komponenter.
