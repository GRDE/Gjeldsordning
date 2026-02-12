"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useAdviserStore } from "@/store/useAdviserStore"
import { Trash2 } from "lucide-react"

export function DebtList() {
    const debts = useAdviserStore((state) => state.debts)
    const removeDebt = useAdviserStore((state) => state.removeDebt)

    const total = debts.reduce((sum, d) => sum + d.amount, 0)

    if (debts.length === 0) {
        return (
            <div className="text-center p-8 bg-muted rounded-md border border-dashed">
                <p className="text-muted-foreground">Ingen gjeldsposter lagt til enda.</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Kreditor</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead className="text-right">Beløp</TableHead>
                            <TableHead className="hidden md:table-cell">Referanse</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {debts.map((debt) => (
                            <TableRow key={debt.id}>
                                <TableCell className="font-medium">{debt.creditor}</TableCell>
                                <TableCell>{debt.type}</TableCell>
                                <TableCell className="text-right">{debt.amount.toLocaleString('no-NO')} kr</TableCell>
                                <TableCell className="hidden md:table-cell text-muted-foreground text-sm">{debt.reference}</TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon" onClick={() => removeDebt(debt.id)}>
                                        <Trash2 className="h-4 w-4 text-destructive" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow className="bg-muted/50 font-medium">
                            <TableCell>Totalt</TableCell>
                            <TableCell></TableCell>
                            <TableCell className="text-right">{total.toLocaleString('no-NO')} kr</TableCell>
                            <TableCell className="hidden md:table-cell"></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
