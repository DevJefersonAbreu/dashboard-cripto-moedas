"use client"
import type React from "react"
import { useAppContext } from "../../context/appContext"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "@/app/styles/theme"
import { GlobalStyle } from "@/app/styles/globalStyles"

export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useAppContext()

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

