"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DEBT_TYPES } from "@/lib/constants"
import { useAdviserStore, DebtItem } from "@/store/useAdviserStore"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { Plus } from "lucide-react"

export function DebtForm() {
    const addDebt = useAdviserStore((state) => state.addDebt)
    const [isOpen, setIsOpen] = useState(false) // Or just always show at bottom? Let's use inline for now.

    const [formData, setFormData] = useState<Partial<DebtItem>>({
        creditor: "",
        type: "",
        amount: 0,
        reference: "",
        notes: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.creditor || !formData.amount) return

        addDebt({
            id: uuidv4(), // Need uuid or similar, using random for now
            creditor: formData.creditor,
            type: formData.type || "Annet",
            amount: Number(formData.amount),
            reference: formData.reference || "",
            notes: formData.notes || ""
        })

        // Reset
        setFormData({
            creditor: "",
            type: "",
            amount: 0,
            reference: "",
            notes: ""
        })
    }

    return (
        <Card className="border-dashed bg-muted/40">
            <CardHeader>
                <CardTitle className="text-lg">Legg til kreditor/gjeldspost</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="creditor">Kreditor (Firma/Navn)</Label>
                            <Input
                                id="creditor"
                                placeholder="f.eks. Bank Norwegian"
                                value={formData.creditor}
                                onChange={(e) => setFormData({ ...formData, creditor: e.target.value })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="type">Type gjeld</Label>
                            <Select
                                value={formData.type}
                                onValueChange={(val) => setFormData({ ...formData, type: val })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Velg type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {DEBT_TYPES.map((t) => (
                                        <SelectItem key={t} value={t}>{t}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="amount">Beløp (ca. restgjeld)</Label>
                            <Input
                                id="amount"
                                type="number"
                                placeholder="0"
                                value={formData.amount || ""}
                                onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="reference">Saksnummer/Referanse</Label>
                            <Input
                                id="reference"
                                placeholder="f.eks. 123456789"
                                value={formData.reference}
                                onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="notes">Egne notater (f.eks. siste kontakt)</Label>
                        <Textarea
                            id="notes"
                            placeholder="Notater..."
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full sm:w-auto">
                        <Plus className="mr-2 h-4 w-4" /> Legg til i listen
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
