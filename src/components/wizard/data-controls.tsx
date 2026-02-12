"use client"

import { Button } from "@/components/ui/button"
import { useAdviserStore } from "@/store/useAdviserStore"
import { Download, Upload, Trash } from "lucide-react"
import { toast } from "sonner"
import { useRef } from "react"

export function DataControls() {
    const store = useAdviserStore()
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleSave = () => {
        const data = {
            personalInfo: store.personalInfo,
            debts: store.debts,
            budget: store.budget,
            checklist: store.checklist,
            application: store.application,
            hasStarted: store.hasStarted,
            timestamp: new Date().toISOString()
        }

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `gjeldsordning-data-${new Date().toISOString().split('T')[0]}.json`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)

        toast.success("Lagret fil", { description: "Dine data er lagret til nedlastinger." })
    }

    const handleLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = (event) => {
            try {
                const json = JSON.parse(event.target?.result as string)
                // Use loadData for bulk update
                store.loadData(json)
                toast.success("Lastet data", { description: "Dine data er importert." })
            } catch (err) {
                toast.error("Feil filformat", { description: "Kunne ikke lese filen." })
            }
        }
        reader.readAsText(file)
    }

    const handleReset = () => {
        if (confirm("Er du sikker på at du vil slette alt?")) {
            store.resetAll()
            toast.info("Nullstilt", { description: "Alle data er slettet." })
        }
    }

    return (
        <div className="flex flex-col gap-2 border-t pt-4">
            <div className="text-xs text-muted-foreground font-medium mb-2">Dine data</div>
            <Button variant="outline" size="sm" className="justify-start" onClick={handleSave}>
                <Download className="mr-2 h-4 w-4" /> Lagre
            </Button>

            <Button variant="outline" size="sm" className="justify-start" onClick={() => fileInputRef.current?.click()}>
                <Upload className="mr-2 h-4 w-4" /> Last inn
            </Button>
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".json"
                onChange={handleLoad}
            />
            <Button variant="ghost" size="sm" className="justify-start text-muted-foreground hover:text-destructive" onClick={handleReset}>
                <Trash className="mr-2 h-4 w-4" /> Nullstill
            </Button>
        </div>
    )
}
