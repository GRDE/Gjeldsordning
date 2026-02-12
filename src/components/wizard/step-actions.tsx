"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface StepActionsProps {
    prevUrl?: string
    nextUrl?: string
    onNext?: () => void
    nextLabel?: string
    disableNext?: boolean
}

export function StepActions({ prevUrl, nextUrl, onNext, nextLabel = "Gå videre", disableNext = false }: StepActionsProps) {
    return (
        <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <div>
                {prevUrl ? (
                    <Link href={prevUrl}>
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Tilbake
                        </Button>
                    </Link>
                ) : (
                    <div /> // Spacer
                )}
            </div>

            <div>
                {nextUrl ? (
                    <Link href={nextUrl} onClick={onNext}>
                        <Button disabled={disableNext} onClick={(e) => {
                            if (onNext) {
                                // If onNext is provided, we might want to prevent default navigation if needed,
                                // but usually we just run the handler and let navigation happen.
                                // However, if validation fails, we should prevent navigation.
                                // For simplicity, we assume onNext handles logic but navigation happens via Link
                                // unless we want to block it.
                                // Better pattern: Button with router.push if logic is needed.
                                // Here we keep it simple.
                                onNext()
                            }
                        }}>
                            {nextLabel}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                ) : (
                    <Button disabled={disableNext} onClick={onNext}>
                        {nextLabel}
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
        </div>
    )
}
