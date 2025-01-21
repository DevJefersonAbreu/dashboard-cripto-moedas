"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Theme = "light" | "dark"
type Currency = "USD" | "EUR" | "BRL"

interface AppContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  currency: Currency
  setCurrency: (currency: Currency) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light")
  const [currency, setCurrency] = useState<Currency>("USD")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    const savedCurrency = localStorage.getItem("currency") as Currency
    if (savedTheme) setTheme(savedTheme)
    if (savedCurrency) setCurrency(savedCurrency)
  }, [])

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return <AppContext.Provider value={{ theme, setTheme, currency, setCurrency }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}

