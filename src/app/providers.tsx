"use client"

import type React from "react"
import { AppProvider } from "../app/context/appContext"
import { ThemeWrapper } from "../app/components/themeWrapper/themeWrapper"
import styled from "styled-components"
import { Header } from "./components/shared/header/header"
import { Footer } from "./components/shared/footer/footer"

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-bottom: 60px; 
`

const MainArea = styled.main`
  flex: 1;
  padding: 16px;
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  
  @media (min-width: 768px) {
    padding: 24px;
    max-width: 1200px;
  }
`

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <ThemeWrapper>
        <LayoutContainer>
          <Header />
          <MainContent>
            <MainArea>{children}</MainArea>
          </MainContent>
          <Footer />
        </LayoutContainer>
      </ThemeWrapper>
    </AppProvider>
  )
}

