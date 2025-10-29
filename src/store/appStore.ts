// stores/useLanguageStore.ts
"use client"

import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

type Languages = "en" | "et"

type LanguageStore = {
    language: Languages
    setLanguage: (val: Languages) => void
}

export const useLanguageStore = create<LanguageStore>()(
    persist(
        (set) => ({
            language: "et",
            setLanguage: (language) => set({ language }),
        }),
        {
            name: "language-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
)