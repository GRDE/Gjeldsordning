"use client"

import { StepNavigation } from "@/components/wizard/step-navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { STEPS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export default function WizardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    <div className="md:hidden mr-4">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="p-0 w-72">
                                <StepNavigation />
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="mr-4 hidden md:flex">
                        <Link href="/" className="mr-6 flex items-center space-x-2">
                            <span className="hidden font-bold sm:inline-block">
                                Gjeldsordning Veileder
                            </span>
                        </Link>
                    </div>

                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <Link href="/">
                            <Button variant="ghost" size="sm">
                                <Home className="mr-2 h-4 w-4" />
                                Forside
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 container max-w-screen-2xl">
                <StepNavigation />
                <main className="flex-1 py-6 md:px-8">
                    <div className="mx-auto max-w-3xl">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
