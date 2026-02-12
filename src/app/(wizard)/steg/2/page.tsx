"use client"

import { DebtForm } from "@/components/wizard/debt-form"
import { DebtList } from "@/components/wizard/debt-list"
import { StepActions } from "@/components/wizard/step-actions"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Step2Page() {

    const handleDownloadTxt = () => {
        // Basic text export implementation
        // Ideally this should use the store data directly but for now we'll just placeholder logic
        // We'll implement robust export in a utils file later.
        alert("Nedlasting kommer snart - se 'Søknadsutkast' steg for full rapport!")
    }

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Kartlegg gjelden</h1>
                <p className="text-muted-foreground">
                    For å søke må du ha en oversikt over alle kreditorene dine. Legg inn alle krav du kjenner til.
                </p>
            </div>

            <DebtForm />

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Din liste</h2>
                </div>
                <DebtList />
            </div>

            <StepActions
                prevUrl="/steg/1"
                nextUrl="/steg/3"
                nextLabel="Gå videre til budsjett"
            />
        </div>
    )
}
