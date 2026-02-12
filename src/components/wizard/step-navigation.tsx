"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Check, Circle, CreditCard, Calculator, FileText, Send, Info } from "lucide-react"
import { STEPS } from "@/lib/constants"
import { DataControls } from "./data-controls"

export function StepNavigation() {
    const pathname = usePathname()

    const icons = {
        1: Info,
        2: CreditCard,
        3: Calculator,
        4: FileText,
        5: FileText,
        6: Send
    }

    return (
        <nav className="hidden md:flex w-64 shrink-0 border-r bg-muted/30 flex-col min-h-[calc(100vh-4rem)]">
            <div className="flex-1 p-6">
                <div className="font-semibold text-lg px-2 mb-6">Steg i prosessen</div>
                <div className="space-y-1">
                    {STEPS.map((step) => {
                        const isActive = pathname === step.path
                        // Simple logic: if we are past this step index, it's "done" (visual only for now)
                        // Real logic would check store state
                        const stepId = step.id
                        // Handle if we are not in a step path (e.g. root), default to 0
                        const pathStepId = parseInt(pathname.split('/').pop() || "0")
                        const currentStepId = isNaN(pathStepId) ? 0 : pathStepId
                        const isCompleted = stepId < currentStepId

                        const Icon = icons[step.id as keyof typeof icons] || Circle

                        return (
                            <Link
                                key={step.id}
                                href={step.path}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                                    isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                    isCompleted && !isActive && "text-green-600"
                                )}
                            >
                                <div className={cn(
                                    "flex items-center justify-center w-6 h-6 rounded-full border",
                                    isActive ? "border-primary-foreground" : "border-current"
                                )}>
                                    {isCompleted ? <Check className="w-3.5 h-3.5" /> : <span className="text-xs">{step.id}</span>}
                                </div>
                                <span>{step.title}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="p-6 mt-auto">
                <DataControls />
            </div>
        </nav>
    )
}
