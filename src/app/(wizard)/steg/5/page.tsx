"use client"

import { ApplicationForm } from "@/components/wizard/application-form"
import { ApplicationPreview } from "@/components/wizard/application-preview"
import { StepActions } from "@/components/wizard/step-actions"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Step5Page() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Søknadsutkast</h1>
                <p className="text-muted-foreground">
                    Her setter vi sammen informasjonen din til et utkast du kan sende til Namsmannen.
                </p>
            </div>

            <Tabs defaultValue="edit" className="space-y-6">
                <TabsList>
                    <TabsTrigger value="edit">Rediger innhold</TabsTrigger>
                    <TabsTrigger value="preview">Forhåndsvisning & Nedlasting</TabsTrigger>
                </TabsList>

                <TabsContent value="edit">
                    <ApplicationForm />
                </TabsContent>

                <TabsContent value="preview">
                    <ApplicationPreview />
                </TabsContent>
            </Tabs>

            <StepActions
                prevUrl="/steg/4"
                nextUrl="/steg/6"
                nextLabel="Fullfør"
            />
        </div>
    )
}
