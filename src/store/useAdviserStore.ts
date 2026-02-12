import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type DebtItem = {
    id: string
    creditor: string
    type: string
    amount: number
    reference: string
    notes: string
}

export type Budget = {
    income: {
        salary: number
        benefits: number
        partnerSalary: number
        other: number
    }
    expenses: {
        housing: number
        electricity: number
        insurance: number
        transport: number
        food: number
        children: number
        loans: number
        other: number
    }
}

export type PersonalInfo = {
    name: string
    address: string
    birthDate: string
    partnerName?: string
    childrenCount: number
}

export type ApplicationDraft = {
    situation: string
    origin: string
    attempts: string
    proposal: string
}

interface AdviserState {
    hasStarted: boolean
    setHasStarted: (val: boolean) => void

    personalInfo: PersonalInfo
    setPersonalInfo: (info: Partial<PersonalInfo>) => void

    debts: DebtItem[]
    addDebt: (debt: DebtItem) => void
    updateDebt: (id: string, debt: Partial<DebtItem>) => void
    removeDebt: (id: string) => void
    setDebts: (debts: DebtItem[]) => void

    budget: Budget
    updateBudget: (category: keyof Budget, field: string, value: number) => void

    checklist: Record<string, boolean>
    toggleChecklist: (key: string) => void

    application: ApplicationDraft
    updateApplication: (field: keyof ApplicationDraft, value: string) => void

    resetAll: () => void
    loadData: (data: Partial<AdviserState>) => void
}

const INITIAL_STATE = {
    hasStarted: false,
    personalInfo: {
        name: '',
        address: '',
        birthDate: '',
        childrenCount: 0
    },
    debts: [],
    budget: {
        income: { salary: 0, benefits: 0, partnerSalary: 0, other: 0 },
        expenses: { housing: 0, electricity: 0, insurance: 0, transport: 0, food: 0, children: 0, loans: 0, other: 0 }
    },
    checklist: {},
    application: {
        situation: '',
        origin: '',
        attempts: '',
        proposal: ''
    }
}

export const useAdviserStore = create<AdviserState>()(
    persist(
        (set) => ({
            ...INITIAL_STATE,

            setHasStarted: (val) => set({ hasStarted: val }),

            setPersonalInfo: (info) => set((state) => ({
                personalInfo: { ...state.personalInfo, ...info }
            })),

            addDebt: (debt) => set((state) => ({
                debts: [...state.debts, debt]
            })),

            updateDebt: (id, updated) => set((state) => ({
                debts: state.debts.map((d) => (d.id === id ? { ...d, ...updated } : d))
            })),

            removeDebt: (id) => set((state) => ({
                debts: state.debts.filter((d) => d.id !== id)
            })),

            setDebts: (debts) => set({ debts }),

            updateBudget: (category, field, value) => set((state) => ({
                budget: {
                    ...state.budget,
                    [category]: {
                        ...state.budget[category],
                        [field]: value
                    }
                }
            })),

            toggleChecklist: (key) => set((state) => ({
                checklist: {
                    ...state.checklist,
                    [key]: !state.checklist[key]
                }
            })),

            updateApplication: (field, value) => set((state) => ({
                application: { ...state.application, [field]: value }
            })),

            resetAll: () => set(INITIAL_STATE),

            loadData: (data) => set((state) => ({ ...state, ...data }))
        }),
        {
            name: 'gjeldsordning-store',
        }
    )
)
