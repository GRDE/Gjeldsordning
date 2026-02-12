import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Download, AlertTriangle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center font-bold text-lg" href="/">
          Gjeldsordning Veileder
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/personvern">
            Personvern
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Hjelp til å søke gjeldsordning
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Et trygt, gratis og privat verktøy som hjelper deg med å få oversikt over økonomien og lage et utkast til søknad om gjeldsordning.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/steg/1">
                  <Button size="lg" className="h-12 px-8">
                    Start veilederen <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 max-w-[600px]">
                <ShieldCheck className="inline h-3 w-3 mr-1" />
                Dine data lagres kun i din egen nettleser. Vi ser ingenting av det du skriver.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-800 text-blue-800 dark:text-blue-100">
                  Hvordan det fungerer
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Steg for steg mot en løsning
                </h2>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  href="/steg/1"
                >
                  Gå i gang
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <ul className="grid gap-6">
                  <li className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted border">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Forstå kravene</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Lær om hvem som kan få gjeldsordning og hva det innebærer for deg.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted border">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Kartlegg gjeld og budsjett</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Legg inn kreditorene dine og sett opp et enkelt budsjett for å se hva du kan betale.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted border">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Last ned søknad</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Få ferdig utfylt tekst som du kan sende til namsmannen.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50 dark:bg-yellow-950/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <AlertTriangle className="h-10 w-10 text-yellow-600 dark:text-yellow-500" />
              <h2 className="text-2xl font-bold">Viktig informasjon</h2>
              <p className="max-w-[800px] text-gray-700 dark:text-gray-300">
                Dette er et privat hjelpeverktøy og ikke en offisiell tjeneste fra staten.
                Søknaden skal sendes til Namsmannen. Vi gir ikke juridiske råd, men hjelper deg
                å strukturere informasjonen du trenger.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://www.politiet.no/tjenester/namsmann-og-forliksrad/gjeldsordning/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline text-blue-600">
                  Les mer på Politiet.no
                </a>
                <a href="https://www.nav.no/okonomi-gjeld" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline text-blue-600">
                  NAV Økonomi- og gjeldsrådgivning
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2026 Selvhjelp Gjeldsordning.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Vilkår for bruk
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Personvern
          </Link>
        </nav>
      </footer>
    </div>
  )
}
