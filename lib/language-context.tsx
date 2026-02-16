"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { translations, type Locale } from "./translations"

type TranslationType = (typeof translations)["pt"]

interface LanguageContextType {
  locale: Locale
  t: TranslationType
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt")

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "pt" ? "en" : "pt"))
  }, [])

  const t = translations[locale]

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
