"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useAdviserStore } from "@/store/useAdviserStore"

export function ApplicationForm() {
    const personalInfo = useAdviserStore((state) => state.personalInfo)
    const setPersonalInfo = useAdviserStore((state) => state.setPersonalInfo)
    const application = useAdviserStore((state) => state.application)
    const updateApplication = useAdviserStore((state) => state.updateApplication)

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Om deg</CardTitle>
                    <CardDescription>Personalia som skal stå i brevet.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Navn</Label>
                        <Input
                            id="name"
                            value={personalInfo.name}
                            onChange={(e) => setPersonalInfo({ name: e.target.value })}
                            placeholder="Ola Nordmann"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="address">Adresse</Label>
                        <Input
                            id="address"
                            value={personalInfo.address}
                            onChange={(e) => setPersonalInfo({ address: e.target.value })}
                            placeholder="Storgata 1, 0000 Oslo"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="birthDate">Fødselsdato</Label>
                        <Input
                            id="birthDate"
                            value={personalInfo.birthDate}
                            onChange={(e) => setPersonalInfo({ birthDate: e.target.value })}
                            placeholder="01.01.1980"
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Beskrivelse av situasjonen</CardTitle>
                    <CardDescription>Forklar med egne ord. Dette blir en del av søknaden.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="origin">Hvordan oppstod gjelden?</Label>
                        <Textarea
                            id="origin"
                            className="min-h-[100px]"
                            placeholder="F.eks. samlivsbrudd, arbeidsledighet, sykdom..."
                            value={application.origin}
                            onChange={(e) => updateApplication('origin', e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="attempts">Hva har du forsøkt å gjøre?</Label>
                        <Textarea
                            id="attempts"
                            className="min-h-[100px]"
                            placeholder="F.eks. kontaktet kreditorer for avtale, søkt refinansiering..."
                            value={application.attempts}
                            onChange={(e) => updateApplication('attempts', e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="situation">Dagens situasjon</Label>
                        <Textarea
                            id="situation"
                            className="min-h-[100px]"
                            placeholder="Kort om hvorfor du ikke klarer å betale nå (varig problem)."
                            value={application.situation}
                            onChange={(e) => updateApplication('situation', e.target.value)}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
