"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SIFO_RATES_2024 } from "@/lib/constants"
import { useAdviserStore } from "@/store/useAdviserStore"
import { Info } from "lucide-react"

export function BudgetForm() {
    const budget = useAdviserStore((state) => state.budget)
    const updateBudget = useAdviserStore((state) => state.updateBudget)

    const totalIncome = Object.values(budget.income).reduce((a, b) => a + b, 0)
    const totalExpenses = Object.values(budget.expenses).reduce((a, b) => a + b, 0)
    const capacity = totalIncome - totalExpenses

    // Helper to update specific field
    const setVal = (cat: 'income' | 'expenses', field: string, val: string) => {
        updateBudget(cat, field, Number(val) || 0)
    }

    return (
        <div className="space-y-6">
            <Tabs defaultValue="income">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="income">Inntekter</TabsTrigger>
                    <TabsTrigger value="expenses">Utgifter</TabsTrigger>
                </TabsList>

                <TabsContent value="income" className="space-y-4 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Månedlige inntekter (netto)</CardTitle>
                            <CardDescription>Hva får du utbetalt hver måned?</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="salary">Lønn (etter skatt)</Label>
                                <Input
                                    id="salary" type="number"
                                    value={budget.income.salary || ""}
                                    onChange={(e) => setVal('income', 'salary', e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="benefits">Trygd / Ytelser</Label>
                                <Input
                                    id="benefits" type="number"
                                    value={budget.income.benefits || ""}
                                    onChange={(e) => setVal('income', 'benefits', e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="partnerSalary">Ektefelle/samboers inntekt (hvis felles)</Label>
                                <Input
                                    id="partnerSalary" type="number"
                                    value={budget.income.partnerSalary || ""}
                                    onChange={(e) => setVal('income', 'partnerSalary', e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="otherInc">Annet (bostøtte, barnebidrag mv.)</Label>
                                <Input
                                    id="otherInc" type="number"
                                    value={budget.income.other || ""}
                                    onChange={(e) => setVal('income', 'other', e.target.value)}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="expenses" className="space-y-4 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Nødvendige utgifter</CardTitle>
                            <CardDescription>Hva må du betale for å leve? (Ikke ta med gjelden du skal sanere her)</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="housing">Husleie / Boliglån (renter+avdrag)</Label>
                                <Input
                                    id="housing" type="number"
                                    value={budget.expenses.housing || ""}
                                    onChange={(e) => setVal('expenses', 'housing', e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="electricity">Strøm / Oppvarming</Label>
                                <Input
                                    id="electricity" type="number"
                                    value={budget.expenses.electricity || ""}
                                    onChange={(e) => setVal('expenses', 'electricity', e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="food">Mat / Husholdning</Label>
                                <Input
                                    id="food" type="number"
                                    value={budget.expenses.food || ""}
                                    onChange={(e) => setVal('expenses', 'food', e.target.value)}
                                />
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Info className="h-3 w-3" /> SIFO-referanse enslig: {SIFO_RATES_2024.SINGLE} kr
                                </p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="transport">Transport (kollektivt/bil)</Label>
                                <Input
                                    id="transport" type="number"
                                    value={budget.expenses.transport || ""}
                                    onChange={(e) => setVal('expenses', 'transport', e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="children">Barnehage / SFO / Fritid</Label>
                                <Input
                                    id="children" type="number"
                                    value={budget.expenses.children || ""}
                                    onChange={(e) => setVal('expenses', 'children', e.target.value)}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="insurance">Forsikringer / Medisiner</Label>
                                <Input
                                    id="insurance" type="number"
                                    value={budget.expenses.insurance || ""}
                                    onChange={(e) => setVal('expenses', 'insurance', e.target.value)}
                                />
                            </div>

                            <div className="p-4 bg-muted/50 rounded-md mt-4">
                                <div className="flex justify-between items-center font-semibold">
                                    <span>Totale utgifter:</span>
                                    <span>{totalExpenses.toLocaleString('no-NO')} kr</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                    <CardTitle>Din betalingsevne</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between text-sm mb-2">
                        <span>Totalt Inn:</span>
                        <span className="font-medium text-green-700">{totalIncome.toLocaleString('no-NO')}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-4">
                        <span>Totalt Ut:</span>
                        <span className="font-medium text-red-700">-{totalExpenses.toLocaleString('no-NO')}</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between items-end">
                        <span className="font-bold text-lg">Overskudd:</span>
                        <span className={`text-2xl font-bold ${capacity > 0 ? "text-primary" : "text-destructive"}`}>
                            {capacity.toLocaleString('no-NO')} kr
                        </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                        Dette er beløpet du teoretisk sett kan tilby kreditorene dine hver måned.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
