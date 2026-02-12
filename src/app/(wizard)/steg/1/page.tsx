"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { StepActions } from "@/components/wizard/step-actions"
import { useAdviserStore } from "@/store/useAdviserStore"
import { useState } from "react"
import { Check, X } from "lucide-react"

export default function Step1Page() {
    const setHasStarted = useAdviserStore((state) => state.setHasStarted)

    // Local state for the "quiz"
    const [attempts, setAttempts] = useState<string>("")
    const [insolvency, setInsolvency] = useState<string>("")

    // Mark as started when viewing step 1
    useState(() => {
        setHasStarted(true)
    })

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Forstå ordningen</h1>
                <p className="text-muted-foreground">
                    Før du starter søknadsprosessen er det viktig å vite om du oppfyller hovedkravene.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Hva er gjeldsordning?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>
                        En gjeldsordning er en avtale mellom deg og kreditorene dine som namsmannen hjelper deg å komme frem til.
                        Målet er at du skal få kontroll over økonomien din igjen.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Du betaler det du har evne til i en perioden (normalt 5 år).</li>
                        <li>Resten av gjelden slettes når perioden er over.</li>
                        <li>Du må leve på en minimumssats (livsopphold) i perioden.</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Hurtigsjekk</CardTitle>
                    <CardDescription>Svar på disse spørsmålene for å se om gjeldsordning kan være aktuelt for deg.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-3">
                        <Label className="text-base">Er du "varig ute av stand" til å betale gjelden din?</Label>
                        <p className="text-sm text-muted-foreground">Det betyr at du ikke vil klare å betale ned gjelden over flere år, selv om du lever nøkternt.</p>
                        <RadioGroup value={insolvency} onValueChange={setInsolvency}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="ins-yes" />
                                <Label htmlFor="ins-yes">Ja, jeg ser ingen løsning i overskuelig fremtid</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="ins-no" />
                                <Label htmlFor="ins-no">Nei, jeg kan kanskje klare det hvis jeg får litt tid</Label>
                            </div>
                        </RadioGroup>

                        {insolvency === "no" && (
                            <div className="flex items-center gap-2 p-3 bg-yellow-50 text-yellow-800 rounded-md text-sm dark:bg-yellow-900/30 dark:text-yellow-200">
                                <X className="h-4 w-4" />
                                Kravet er at du er <strong>varig</strong> betalingsudyktig. Hvis problemene er midlertidige, bør du heller søke gjeldsrådgivning hos NAV.
                            </div>
                        )}
                        {insolvency === "yes" && (
                            <div className="flex items-center gap-2 p-3 bg-green-50 text-green-800 rounded-md text-sm dark:bg-green-900/30 dark:text-green-200">
                                <Check className="h-4 w-4" />
                                Dette taler for at du kan søke.
                            </div>
                        )}
                    </div>

                    <div className="space-y-3">
                        <Label className="text-base">Har du forsøkt å gjøre avtaler med kreditorene selv?</Label>
                        <p className="text-sm text-muted-foreground">Loven krever at du har forsøkt å løse saken på egenhånd først.</p>
                        <RadioGroup value={attempts} onValueChange={setAttempts}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="att-yes" />
                                <Label htmlFor="att-yes">Ja, men vi ble ikke enige</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="att-no" />
                                <Label htmlFor="att-no">Nei, jeg har ikke oversikt/har ikke prøvd</Label>
                            </div>
                        </RadioGroup>

                        {attempts === "no" && (
                            <div className="flex items-center gap-2 p-3 bg-yellow-50 text-yellow-800 rounded-md text-sm dark:bg-yellow-900/30 dark:text-yellow-200">
                                <X className="h-4 w-4" />
                                Du må normalt ha forsøkt å inngå avtaler før du søker namsmannen. Denne veilederen kan likevel hjelpe deg med å få oversikt!
                            </div>
                        )}
                        {attempts === "yes" && (
                            <div className="flex items-center gap-2 p-3 bg-green-50 text-green-800 rounded-md text-sm dark:bg-green-900/30 dark:text-green-200">
                                <Check className="h-4 w-4" />
                                Bra. Sørg for å ha dokumentasjon på disse forsøkene (eposter/brev).
                            </div>
                        )}
                    </div>

                </CardContent>
            </Card>

            <StepActions
                nextUrl="/steg/2"
                nextLabel="Gå videre til kartlegging"
            />
        </div>
    )
}
