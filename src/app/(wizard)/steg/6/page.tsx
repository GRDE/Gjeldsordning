"use client"

import { StepActions } from "@/components/wizard/step-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, MapPin, Phone, ExternalLink } from "lucide-react"

export default function Step6Page() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Hva skjer videre?</h1>
                <p className="text-muted-foreground">
                    Nå som du har oversikten, er du klar til å ta neste steg.
                </p>
            </div>

            <Card className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                        Du er godt forberedt!
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    Du har nå en oversikt over gjeld, budsjett og et utkast til søknad. Dette gjør jobben mye enklere for både deg og namsmannen.
                </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <MapPin className="h-5 w-5" />
                            Hvor sender jeg søknaden?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                        <p>Du må sende søknaden til <strong>Namsmannen der du bor</strong>.</p>
                        <p>
                            Du kan finne riktig adresse på politiet.no eller ved å ringe politiet på 02800.
                        </p>
                        <a
                            href="https://www.politiet.no/tjenester/namsmann-og-forliksrad/gjeldsordning/soke-om-gjeldsordning/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline inline-flex items-center mt-2"
                        >
                            Gå til politiet.no <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Phone className="h-5 w-5" />
                            Trenger du mer hjelp?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm space-y-2">
                        <p>NAV tilbyr gratis økonomi- og gjeldsrådgivning.</p>
                        <p>Du kan chatte med dem eller ringe <strong>55 55 33 39</strong>.</p>
                        <a
                            href="https://www.nav.no/okonomi-gjeld"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline inline-flex items-center mt-2"
                        >
                            Gå til NAV Gjeldsrådgivning <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                    </CardContent>
                </Card>
            </div>

            <StepActions
                prevUrl="/steg/5"
                nextUrl="/"
                nextLabel="Gå til forsiden"
            />
        </div>
    )
}
