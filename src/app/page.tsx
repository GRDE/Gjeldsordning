import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Download, AlertTriangle, FileText, Lock, CheckCircle2, ChevronRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
      {/* Navigation */}
      <header className="px-6 lg:px-10 h-16 flex items-center justify-between border-b bg-white/50 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <Link className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 dark:text-white" href="/">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <FileText className="w-5 h-5" />
          </div>
          Gjeldsordning.
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors dark:text-slate-400 dark:hover:text-blue-400" href="/personvern">
            Personvern
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-950 dark:to-slate-900 -z-10" />
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl animate-pulse" />

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-200 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-ping" />
                Privat, trygt og gratis
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 dark:text-white">
                Ta kontroll over <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">økonomien din</span>
              </h1>

              <p className="max-w-[700px] text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Veien til gjeldsordning kan virke overveldende. Vi hjelper deg å strukturere gjeld, budsjett og søknad – helt uten at dine data forlater nettleseren.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
                <Link href="/steg/1">
                  <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all w-full sm:w-auto">
                    Start veilederen <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#hvordan">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80 w-full sm:w-auto">
                    Les mer
                  </Button>
                </Link>
              </div>

              <div className="pt-8 flex items-center justify-center gap-8 text-slate-500 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-500" />
                  Ingen lagring i skyen
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  Følger lovens struktur
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="hvordan" className="w-full py-20 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-white mb-4">
                Slik fungerer det
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                En steg-for-steg prosess designet for å gjøre søknaden overkommelig.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl border bg-slate-50 p-8 hover:shadow-xl transition-all duration-300 dark:bg-slate-900 dark:border-slate-800">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:bg-blue-500/20" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                  <span className="font-bold text-xl">1</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Oversikt & Krav</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Få en enkel innføring i hva gjeldsordning er, og sjekk om du oppfyller de grunnleggende kravene før du starter.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl border bg-slate-50 p-8 hover:shadow-xl transition-all duration-300 dark:bg-slate-900 dark:border-slate-800">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition-all group-hover:bg-indigo-500/20" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
                  <span className="font-bold text-xl">2</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Kartlegging</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Legg inn kreditorer og budsjettposter i et trygt system. Ingenting sendes over nettet, alt blir på din maskin.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-2xl border bg-slate-50 p-8 hover:shadow-xl transition-all duration-300 dark:bg-slate-900 dark:border-slate-800">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-all group-hover:bg-emerald-500/20" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                  <span className="font-bold text-xl">3</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Ferdig Søknad</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Last ned en ferdig formatert søknad (PDF) og kreditorliste som du kan sende direkte til Namsmannen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="w-full py-20 bg-slate-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Maksimalt Personvern
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Dine data er dine alene.</h2>
                <p className="text-lg text-slate-300">
                  Vi vet at økonomi er sensitivt. Derfor har vi bygget denne tjenesten slik at ingen data noen gang forlater din nettleser. Vi bruker ingen sporingskapsler for analyse.
                </p>
                <ul className="space-y-3">
                  {['Ingen server-lagring', 'Ingen Google Analytics', 'Data lagres kun i localStorage', 'Slett alt med ett klikk'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                {/* Abstract stylized UI representation */}
                <div className="relative rounded-2xl border border-slate-700 bg-slate-800/50 p-6 shadow-2xl backdrop-blur-sm">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                  <div className="space-y-4">
                    <div className="h-4 w-1/3 bg-slate-600 rounded animate-pulse" />
                    <div className="h-4 w-2/3 bg-slate-700 rounded" />
                    <div className="space-y-2 pt-4">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded bg-slate-700/50" />
                        <div className="flex-1 space-y-2">
                          <div className="h-3 w-full bg-slate-700 rounded" />
                          <div className="h-3 w-4/5 bg-slate-700 rounded" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-6">
                      <div className="w-full h-10 bg-emerald-600/20 border border-emerald-600/50 rounded flex items-center justify-center text-emerald-400 text-sm font-medium">
                        Beskyttet modus aktiv
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="w-full py-16 bg-amber-50 dark:bg-amber-950/20 border-t border-amber-100 dark:border-amber-900/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-500 font-semibold">
                  <AlertTriangle className="h-5 w-5" />
                  Viktig ansvarsfraskrivelse
                </div>
                <p className="text-sm text-amber-800/80 dark:text-amber-200/60 leading-relaxed">
                  Dette er et privat utviklet hjelpeverktøy og er ikke en offisiell tjeneste fra staten.
                  Søknaden skal sendes til Namsmannen. Vi gir ikke juridiske råd.
                  For offisiell informasjon, se alltid Politiet.no.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a href="https://www.politiet.no/tjenester/namsmann-og-forliksrad/gjeldsordning/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-amber-800 hover:underline">
                  Besøk Politiet.no <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-slate-50 dark:bg-slate-950 border-t">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            © 2026 Selvhjelp Gjeldsordning. Bygget med åpen kildekode.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/GRDE/Gjeldsordning" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
  )
}
