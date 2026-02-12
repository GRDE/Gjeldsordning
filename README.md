# Gjeldsordning Veileder

En personvernsfokusert, offline-first webapplikasjon for å hjelpe privatpersoner med søknad om gjeldsordning.

## Funksjonalitet

### 1. Stegvis Veileder
Applikasjonen leder brukeren gjennom 6 logiske steg:
1.  **Forstå ordningen**: Info og "hurtigsjekk" quiz.
2.  **Kartlegging**: Enkel tabell for å legge inn kreditorer.
3.  **Budsjett**: Oversikt over inntekt og utgifter med SIFO-referansetall.
4.  **Dokumentasjon**: Sjekkliste for vedlegg.
5.  **Søknad**: Generering av søknadstekst basert på inndata.
6.  **Veien videre**: Informasjon om innsending og kontaktpunkter.

### 2. Personvern og Data
- **Ingen backend**: Alt skjer i nettleseren.
- **Lokal lagring**: Data lagres i `localStorage` så man ikke mister det ved reload.
- **JSON Eksport/Import**: Brukere kan lagre fremgangen sin til en fil og fortsette senere.
- **Slett data**: Mulighet for å nulle ut alt.

### 3. Dokumentgenerering
- **PDF**: En profesjonell PDF kan lastes ned direkte fra nettleseren.
- **Tekst**: Mulighet til å kopiere teksten til utklippstavlen.

## Hvordan kjøre prosjektet

1.  **Start utviklingsserveren**:
    ```bash
    npm run dev
    ```
2.  **Gå til**: [http://localhost:3000](http://localhost:3000)

## Teknisk Stack
- **Rammeverk**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + Shadcn UI
- **State**: Zustand (med persist middleware)
- **PDF**: @react-pdf/renderer

## Lisens
MIT License. Se [LICENSE](LICENSE) filen for detaljer.
