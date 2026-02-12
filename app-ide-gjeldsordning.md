Overordnet oppsett

Landingsside: Kort forklaring, disclaimer, lenker til NAV/namsmann/politiet, og én primær knapp: «Start veilederen».



Veileder (/wizard): 4–6 steg, hver som egen «side»/komponent, med lokal state (React context/Zustand) og lagring i localStorage om du vil at folk skal kunne komme tilbake. Ingen backend nødvendig.



Statiske infosider: «Ofte stilte spørsmål», «Begreper», «Hvor får jeg mer hjelp?» med rene lenker til offentlige aktører.



Hvis du bruker Next.js kan hvert steg være egen route (/steg/1, /steg/2 osv.) med en delt layout som viser progresjonslinje og «Tilbake/Neste»‑knapper.



Konkrete steg i veilederen

Forslag til struktur, så du kan mappe direkte til komponenter:



Steg 1 – Forstå ordningen



Kort tekst om vilkår (varig betalingsudyktig, ikke støtende gjeld) med kulepunkter, og lenk til politiets «Slik søker du om gjeldsordning».

​



2–3 ja/nei‑spørsmål («Har du forsøkt andre løsninger?», «Er betalingsproblemene varige?») som kun brukes til å vise enkel tekstfeedback lokalt.



Steg 2 – Kartlegg gjelden



En «tabell‑komponent» der brukeren kan legge til rader: kreditor, type krav, beløp, referanse, siste kontakt. Alt holdes i minne/localStorage.



Knapp «Last ned som tekst/markdown» som genererer en ren tekstliste de kan legge ved søknaden, tilpasset politiets krav om kreditorliste.

​



Steg 3 – Inntekter og utgifter



En enkel budsjettmodul: felter for inntekt (bruker + evt. partner), boutgifter, strøm, forsikring, barneutgifter, transport osv., inspirert av dokumentasjonslisten.



Automatisk beregning av «mulig betalingsevne per måned» (= inntekt – nødvendige utgifter), som du bare viser som veiledende tall.



Steg 4 – Dokumentasjonssjekkliste



Checkbox‑liste med: skattemeldinger/skatteoppgjør siste 3 år, lønnsslipper/ytelsesbrev, husleiekontrakt, forsikringsavtaler, regninger, osv., direkte speilet fra politiets liste.

​



Brukeren kan hake av, men alt ligger bare i nettleseren.



Steg 5 – Søknadsutkast



Skjemafelter: «Kort om situasjonen», «Hvordan oppstod gjelden», «Hvilke tiltak er allerede forsøkt», «Forslag til betalingsplan basert på budsjettet over».



Når de klikker «Generer utkast», limes dette inn i en ferdig brevmal:



Adressering til riktig namsmann (med lenke/infoboks om hvordan de finner adressen).

​



Standard formuleringer à la «Jeg søker med dette om åpning av gjeldsforhandlinger/gjeldsordning etter gjeldsordningsloven …», men uten at du blir for juridisk skråsikker – heller «forslagstekst som du kan redigere».



Knapp for «Kopier tekst» eller «Last ned .txt/.md».



Steg 6 – Hva skjer videre?



Kort punktvis gjennomgang av: behandling hos namsmannen, frivillig ordning, eventuell tvungen ordning i tingretten, og at de kan kontakte NAV for gratis rådgivning.



Telefonnummer og lenke til NAVs økonomi‑ og gjeldstelefon.

​



Personvern- og tekniske valg

Ingen cookies utover helt nødvendig (eller helt uten, siden du kan slippe auth).



Ingen tredjeparts scripts som kan lekke data (Analytics, Hotjar, etc.).



All state i frontend; hvis du vil ha lagring mellom besøk, bruk localStorage med tydelig «Slett alle data»‑knapp i UI.



Egen synlig «Personvern»-side som eksplisitt sier: «Vi lagrer ikke det du skriver inn. All informasjon behandles kun i nettleseren din.»



Forslag til prosjektstruktur (App Router)

Med TypeScript og App Router kunne du f.eks. ha:



src/

&nbsp; app/

&nbsp;   layout.tsx

&nbsp;   page.tsx                // Landingsside

&nbsp;   (wizard)/

&nbsp;     steg/

&nbsp;       1/

&nbsp;         page.tsx          // Forstå ordningen

&nbsp;       2/

&nbsp;         page.tsx          // Kartlegg gjelden

&nbsp;       3/

&nbsp;         page.tsx          // Inntekter og utgifter

&nbsp;       4/

&nbsp;         page.tsx          // Dokumentasjonssjekkliste

&nbsp;       5/

&nbsp;         page.tsx          // Søknadsutkast

&nbsp;       6/

&nbsp;         page.tsx          // Hva skjer videre?

&nbsp;   personvern/

&nbsp;     page.tsx

&nbsp;   om-tjenesten/

&nbsp;     page.tsx

&nbsp; components/

&nbsp;   WizardLayout.tsx

&nbsp;   StepNavigation.tsx

&nbsp;   DebtTable.tsx

&nbsp;   BudgetForm.tsx

&nbsp;   Checklist.tsx

&nbsp;   GeneratedLetter.tsx

&nbsp; lib/

&nbsp;   wizardState.ts          // Zustand/Context for lokal state

&nbsp;   downloadText.ts         // util for å laste ned .txt/.md





WizardLayout gir felles header, progresjonslinje og «Tilbake/Neste».



wizardState holder all brukerdata i memory eller localStorage (ingen backend).



downloadText lager tekstfil lokalt når bruker klikker «Last ned».

Strukturen er i tråd med anbefalt App Router‑bruk, med app/ som ruteroot og felles komponenter i components/.



Tekst til landingsside (app/page.tsx)

Kort, direkte tekst som peker mot veilederen og offentlige aktører:

Tittel: Hjelp til å forberede søknad om gjeldsordning

Har du alvorlige betalingsproblemer og vurderer å søke offentlig gjeldsordning? Denne siden hjelper deg med å få oversikt over økonomien din og lage et utkast til søknad og vedlegg. Tjenesten er gratis og lagrer ikke det du skriver inn.

Offentlig gjeldsordning behandles av namsmannen og bygger på gjeldsordningsloven. Foroffisiell informasjon om vilkår og prosess må du alltid sjekke politiet.no og eventuelt snakke med NAVs økonomi‑ og gjeldsrådgivning.

\[Knapp] «Start veilederen» → /steg/1



Knapp til Steg1



Steg 1 – Forstå ordningen (/steg/1)

Brødtekst: En gjeldsordning er en offentlig ordning for deg som har så store og varige betalingsproblemer at du ikke klarer å betale ned gjelden innen rimelig tid. Namsmannen vurderer om du oppfyller vilkårene.

Vilkårene er blant annet at du er varig ute av stand til å betale gjelden, og at det ikke virker støtende at du får gjeldsordning. Gjelden bør som hovedregel være eldre enn noen år, og gjeld som skattekrav og straffegjeld vurderes strengt.

En gjeldsordning varer normalt i flere år, ofte rundt fem år, hvor du betaler det du har mulighet til, og resten av gjelden normalt slettes når perioden er over.



Under kan du ha 2–3 ja/nei‑spørsmål, men all logikk er kun UI‑feedback.



Knapp til Steg2

Steg 2 – Kartlegg gjelden (/steg/2)

Før du søker, må du ha en oversikt over alle du skylder penger og hvor mye. Namsmannen ber om en liste over kreditorene dine som vedlegg til søknaden.

I skjemaet under kan du legge inn én linje per kreditor. Når du er ferdig, kan du laste ned oversikten som en tekstfil og legge den ved søknaden. Ingenting lagres på denne nettsiden.



Kolonne‑forslag i DebtTable:



Kreditor/navn



Type krav (forbrukslån, kredittkort, skatt, inkasso osv.)



Restgjeld (ca. beløp)



Referanse/kontonummer



Kommentar (f.eks. inkassobyrå, siste dialog)



Knapp til Steg3



Steg 3 – Inntekter og utgifter (/steg/3)

Introtekst: Du må også gi namsmannen en oversikt over inntekter og nødvendige utgifter for deg og eventuell ektefelle eller samboer. Dette brukes til å vurdere betalingsevnen din.

Fyll inn tallene som passer for deg. Verktøyet viser et veiledende månedlig «overskudd» som du kan bruke som utgangspunkt for forslaget ditt til betalingsplan. Tallene du legger inn lagres kun i nettleseren din.



Felter i BudgetForm kan grupperes som:



Inntekter: Lønn, trygd, andre ytelser (deg + partner).



Boutgifter: Husleie/lån, strøm, kommunale avgifter, felleskostnader.



Andre faste utgifter: Forsikring, barnehage/SFO, barnebidrag, transport, medisiner mv.



Vis under:

Mulig betalingsrom per måned (omtrent): XXX kr – kun info, ingen «råd».



Knapp til Steg4



Steg 4 – Dokumentasjonssjekkliste (/steg/4)

Introtekst: Når du søker, skal du legge ved dokumentasjon som viser hvordan økonomien din faktisk ser ut. Nedenfor finner du en sjekkliste du kan bruke til å forberede alt før du sender søknaden.



Checkbox‑punkter (tekst i UI):



Skattemelding og skatteoppgjør for de siste tre årene for deg og ektefelle/samboer.



Dokumentasjon på inntekt de siste månedene (lønnsslipper, utbetalingsoversikt fra NAV osv.).



Dokumentasjon på boutgifter (husleiekontrakt, boliglånsavtale, felleskostnader, strømregninger).

​



Dokumentasjon på andre faste utgifter, som barnehage/SFO, barnebidrag, medisinske utgifter.

​



Eventuell sluttinnberetning hvis du har vært gjennom konkurs.

​

Knapp til Steg5



Steg 5 – Søknadsutkast (/steg/5)

Her lar du brukeren fylle inn noen fritekstfelt, og genererer et brev. Forslag til fritekst‑felter:



Kort om situasjonen din



Hvordan gjelden har oppstått



Hvilke løsninger du allerede har forsøkt (avtaler med kreditorer, økonomisk rådgivning osv.)



Forslag til hvor mye du kan betale hver måned og hvor lenge (fra budsjettet over)



Eksempel på generert Brevmal (brukeren redigerer selv):



Til namsmannen

Jeg ønsker med dette å søke om åpning av gjeldsforhandlinger/gjeldsordning etter gjeldsordningsloven.

1\. Om meg

\[Navn]

\[Adresse]

\[Fødselsdato]

Jeg har i lengre tid hatt alvorlige betalingsproblemer og klarer ikke å betjene gjelden min på en forsvarlig måte. Problemet vurderer jeg som varig.

2\. Hvordan gjelden har oppstått

\[Her settes inn brukerens beskrivelse av hvordan gjelden har oppstått, for eksempel arbeidsledighet, sykdom, samlivsbrudd eller andre forhold.]

3\. Hvilke løsninger jeg allerede har forsøkt

\[Her settes inn brukerens beskrivelse, for eksempel forsøk på å inngå avdragsordninger med kreditorer, frivillige avtaler, refinansiering eller økonomisk rådgivning gjennom NAV/kommune.]

4\. Oversikt over gjeld, inntekter og utgifter

Jeg legger ved:

– Liste over alle kreditorer med restgjeld og type krav.

– Oversikt over mine og eventuell ektefelle/samboers inntekter og faste utgifter.

– Skattemelding og skatteoppgjør for de tre siste årene.

– Dokumentasjon på boutgifter og andre nødvendige utgifter.

5\. Forslag til betalingsplan

På bakgrunn av budsjettet jeg legger ved, mener jeg at jeg realistisk kan betale cirka \[beløp] kroner per måned til fordeling mellom kreditorene i en periode på \[antall år]. Etter denne perioden vil jeg ikke ha mulighet til å betale mer, og ber derfor om at resten av gjelden slettes gjennom gjeldsordning.

Jeg ber om at namsmannen vurderer om vilkårene for gjeldsordning er oppfylt og hjelper meg videre i prosessen.

Med vennlig hilsen

\[Navn]

\[Sted og dato]



Du kan gjøre alt mellom hakeparenteser til «placeholder‑felter» som fylles inn automatisk fra wizardState.



Knapp til Steg6



Steg 6 – Hva skjer videre? (/steg/6)

Kort informasjons‑tekst: Når du har fylt ut søknadsskjemaet fra politiet og lagt ved nødvendig dokumentasjon, sender du søknaden til namsmannen der du bor, enten per post eller ved å levere den fysisk.

Namsmannen vurderer først om vilkårene for gjeldsordning er oppfylt og kan hjelpe deg med å utarbeide et forslag til frivillig ordning som sendes til kreditorene. Dersom dere ikke blir enige, kan saken gå videre til tingretten for tvungen gjeldsordning.

Har du behov for personlig hjelp underveis, kan du kontakte NAVs økonomi‑ og gjeldsrådgivning i kommunen din eller NAVs økonomi‑ og gjeldstelefon.



Personvernside – kort tekst

Denne tjenesten er laget som et rent selvhjelpsverktøy. Vi lagrer ingen av opplysningene du skriver inn. All informasjon behandles kun i nettleseren din og slettes når du lukker siden, eller når du selv velger «Slett alle data».



Vi bruker ikke informasjonskapsler (cookies) eller analyseverktøy som kan knytte bruken av tjenesten til deg personlig.





