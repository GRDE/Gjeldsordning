"use client"

import { BudgetForm } from "@/components/wizard/budget-form"
import { StepActions } from "@/components/wizard/step-actions"

export default function Step3Page() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Inntekter og utgifter</h1>
                <p className="text-muted-foreground">
                    Sett opp et realistisk budsjett for å finne ut hvor mye du kan betale.
                </p>
            </div>

            <BudgetForm />

            <StepActions
                prevUrl="/steg/2"
                nextUrl="/steg/4"
                nextLabel="Gå videre til dokumentasjon"
            />
        </div>
    )
}
