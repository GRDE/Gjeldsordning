"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useAdviserStore } from "@/store/useAdviserStore"

const CHECKLIST_ITEMS = [
    { id: "skatt", label: "Skattemelding og skatteoppgjør (siste 3 år)" },
    { id: "lonn", label: "Lønnsslipper / Trygdeutbetalinger (siste 3 mnd)" },
    { id: "husleie", label: "Husleiekontrakt eller dok. på boliglån/fellesutgifter" },
    { id: "strom", label: "Strømregninger (gjennomsnitt)" },
    { id: "bank", label: "Kontoutskrifter (vanligvis siste 3 mnd)" },
    { id: "gjeld", label: "Dokumentasjon på all gjeld (brev fra kreditor/namsmann)" },
    { id: "annet", label: "Dokumentasjon på særutgifter (medisiner, barnehage, bidrag)" }
]

export function Checklist() {
    const checklist = useAdviserStore((state) => state.checklist)
    const toggleChecklist = useAdviserStore((state) => state.toggleChecklist)

    return (
        <div className="space-y-4">
            {CHECKLIST_ITEMS.map((item) => (
                <div key={item.id} className="flex items-start space-x-3 p-4 border rounded-md bg-card hover:bg-accent/5 transition-colors">
                    <Checkbox
                        id={item.id}
                        checked={checklist[item.id] || false}
                        onCheckedChange={() => toggleChecklist(item.id)}
                    />
                    <div className="grid gap-1.5 leading-none">
                        <Label
                            htmlFor={item.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                            {item.label}
                        </Label>
                        <p className="text-xs text-muted-foreground">
                            {checklist[item.id] ? "Markert som klar." : "Ikke sjekket ennå."}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
