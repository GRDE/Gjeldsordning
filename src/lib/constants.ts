export const SIFO_RATES_2024 = {
  SINGLE: 12000, // Example generic rate, verify actual numbers or use a range
  COUPLE: 20000,
  CHILD: 4000, // Per child avg
}

export const DEBT_TYPES = [
  "Forbrukslån",
  "Kredittkort",
  "Nordic Debt Collection",
  "Inkasso",
  "Boliglån",
  "Billån",
  "Studielån",
  "Skattekrav",
  "Bidragsgjeld",
  "Annet",
] as const

export const STEPS = [
  { id: 1, title: "Forstå ordningen", path: "/steg/1" },
  { id: 2, title: "Kartlegg gjeld", path: "/steg/2" },
  { id: 3, title: "Budsjett", path: "/steg/3" },
  { id: 4, title: "Dokumentasjon", path: "/steg/4" },
  { id: 5, title: "Søknadsutkast", path: "/steg/5" },
  { id: 6, title: "Veien videre", path: "/steg/6" },
]
