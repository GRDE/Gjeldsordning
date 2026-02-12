"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useAdviserStore } from "@/store/useAdviserStore"
import { Copy } from "lucide-react"
import { toast } from "sonner"
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'

// Register font if needed, but standard fonts work. 
// Note: client-side PDF generation can be heavy.
// We'll define the PDF component here.

const styles = StyleSheet.create({
    page: { flexDirection: 'column', backgroundColor: '#FFFFFF', padding: 30, fontSize: 12, fontFamily: 'Helvetica' },
    header: { fontSize: 18, marginBottom: 20, fontWeight: 'bold' },
    section: { marginBottom: 10 },
    label: { fontWeight: 'bold', marginBottom: 2 },
    text: { marginBottom: 5, lineHeight: 1.5 },
    bold: { fontWeight: 'bold' },
});

const MyDocument = ({ store }: { store: any }) => {
    const { personalInfo, application, debts, budget } = store
    const totalDebt = debts.reduce((sum: number, d: any) => sum + d.amount, 0)
    const income = Object.values(budget.income).reduce((a: number, b: any) => a + Number(b), 0)
    const expenses = Object.values(budget.expenses).reduce((a: number, b: any) => a + Number(b), 0)
    const surplus = income - expenses

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.header}>Søknad om gjeldsordning</Text>

                <View style={styles.section}>
                    <Text>Til Namsmannen</Text>
                    <Text>Dato: {new Date().toLocaleDateString('no-NO')}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.bold}>Søker:</Text>
                    <Text>{personalInfo.name}</Text>
                    <Text>{personalInfo.address}</Text>
                    <Text>Fødselsdato: {personalInfo.birthDate}</Text>
                </View>

                <View style={styles.section}>
                    <Text>Jeg søker med dette om åpning av gjeldsforhandlinger etter gjeldsordningsloven.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.header}>1. Bakgrunn for problemene</Text>
                    <Text style={styles.text}>{application.origin || "[Beskrivelse mangler]"}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.header}>2. Forsøk på løsning</Text>
                    <Text style={styles.text}>{application.attempts || "[Beskrivelse mangler]"}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.header}>3. Økonomisk oversikt</Text>
                    <Text style={styles.text}>Samlet gjeld: {totalDebt.toLocaleString('no-NO')} kr</Text>
                    <Text style={styles.text}>Antall kreditorer: {debts.length}</Text>
                    <Text style={styles.text}>Månedlig netto inntekt: {income.toLocaleString('no-NO')} kr</Text>
                    <Text style={styles.text}>Månedlige nødvendige utgifter: {expenses.toLocaleString('no-NO')} kr</Text>
                    <Text style={styles.text}>Disponibelt til kreditorer: {surplus.toLocaleString('no-NO')} kr</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.header}>4. Forslag</Text>
                    <Text style={styles.text}>
                        Jeg foreslår å betale {surplus > 0 ? surplus.toLocaleString('no-NO') : 0} kr per måned i 5 år.
                    </Text>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text>Med vennlig hilsen</Text>
                    <Text>{personalInfo.name}</Text>
                </View>
            </Page>
            <Page size="A4" style={styles.page}>
                <Text style={styles.header}>Vedlegg: Kreditorliste</Text>
                <View>
                    {debts.map((d: any, i: number) => (
                        <View key={i} style={{ marginBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 5 }}>
                            <Text style={styles.bold}>{d.creditor}</Text>
                            <Text>Beløp: {d.amount.toLocaleString('no-NO')} kr</Text>
                            <Text>Type: {d.type}</Text>
                            <Text>Ref: {d.reference}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    )
}

export function ApplicationPreview() {
    const store = useAdviserStore()
    const { personalInfo, application, budget, debts } = store

    // Calculate totals for display
    const totalDebt = debts.reduce((sum, d) => sum + d.amount, 0)
    const income = Object.values(budget.income).reduce((a, b) => a + Number(b), 0)
    const expenses = Object.values(budget.expenses).reduce((a, b) => a + Number(b), 0)
    const surplus = income - expenses

    const textContent = `
Til Namsmannen
Dato: ${new Date().toLocaleDateString('no-NO')}

Jeg søker med dette om åpning av gjeldsforhandlinger etter gjeldsordningsloven.

NAVN: ${personalInfo.name}
ADRESSE: ${personalInfo.address}
FØDT: ${personalInfo.birthDate}

1. BAKGRUNN
${application.origin}

2. FORSØK PÅ EGENHÅND
${application.attempts}

3. ØKONOMI
- Samlet gjeld: ${totalDebt.toLocaleString('no-NO')} kr
- Månedlig inntekt: ${income.toLocaleString('no-NO')} kr
- Månedlige utgifter: ${expenses.toLocaleString('no-NO')} kr
- Mulig månedlig betaling: ${surplus.toLocaleString('no-NO')} kr

4. FORSLAG
Jeg foreslår å betale ${surplus > 0 ? surplus.toLocaleString('no-NO') : 0} kr månedlig i 5 år.

Med vennlig hilsen
${personalInfo.name}
    `.trim()

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textContent)
        toast("Kopiert til utklippstavle")
    }

    // Client-side only for PDF
    const isClient = typeof window !== 'undefined'

    return (
        <div className="space-y-4">
            <div className="flex gap-4">
                <Button onClick={copyToClipboard} variant="outline">
                    <Copy className="mr-2 h-4 w-4" />
                    Kopier tekst
                </Button>

                {isClient && (
                    <PDFDownloadLink document={<MyDocument store={store} />} fileName="soknad-gjeldsordning.pdf">
                        {({ blob, url, loading, error }) => (
                            <Button disabled={loading}>
                                {loading ? 'Genererer PDF...' : 'Last ned PDF'}
                            </Button>
                        )}
                    </PDFDownloadLink>
                )}
            </div>

            <Card className="bg-muted/50 whitespace-pre-wrap font-mono text-sm p-4 border-dashed">
                {textContent}
            </Card>
        </div>
    )
}
