// stores/useLanguageStore.ts
"use client"

import { create } from "zustand"

type Languages = "en" | "et"

type LanguageStore = {
    language: Languages
    name: string
    setName: (val: string) => void
    setLanguage: (val: Languages) => void
}

export const useLanguageStore = create<LanguageStore>()(

    (set) => ({
        language: "et",
        name: "",
        setLanguage: (language) => set({ language }),
        setName: (name) => set({ name }),
    }),


)