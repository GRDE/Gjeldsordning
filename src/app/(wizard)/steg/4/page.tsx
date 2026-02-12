"use client"

import { Checklist } from "@/components/wizard/checklist"
import { StepActions } from "@/components/wizard/step-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Step4Page() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Dokumentasjon</h1>
                <p className="text-muted-foreground">
                    Namsmannen krever at du dokumenterer alle opplysningene dine. Bruk denne listen for å samle alt du trenger.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Sjekkliste for vedlegg</CardTitle>
                </CardHeader>
                <CardContent>
                    <Checklist />
                </CardContent>
            </Card>

            <StepActions
                prevUrl="/steg/3"
                nextUrl="/steg/5"
                nextLabel="Lag søknadsutkast"
            />
        </div>
    )
}
