"use client"
import type React from "react"
import { useState } from "react"
import * as S from "./styles"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useAppContext } from "../../../context/appContext"

export const Header: React.FC = () => {
  const {  currency } = useAppContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <S.Container>
      <S.TopSection>
        <S.LeftContent>
          <S.Logo>C</S.Logo>
          <S.Title>Dashboard</S.Title>
        </S.LeftContent>
        <S.RightContent>
          <S.Avatar>N</S.Avatar>
          <S.MobileMenuButton onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </S.MobileMenuButton>
        </S.RightContent>
      </S.TopSection>
      <S.Navigation $isOpen={isMenuOpen}>
        <S.NavTabs>
          <Link href="/" passHref>
            <S.NavTab as="a" onClick={() => setIsMenuOpen(false)}>
              Visão Geral
            </S.NavTab>
          </Link>
          <Link href="/market" passHref>
            <S.NavTab as="a" onClick={() => setIsMenuOpen(false)}>
              Mercado
            </S.NavTab>
          </Link>
          <Link href="/yearlyAnalysis" passHref>
            <S.NavTab as="a" onClick={() => setIsMenuOpen(false)}>
              Análise Anual
            </S.NavTab>
          </Link>
          <Link href="/customize" passHref>
            <S.NavTab as="a" onClick={() => setIsMenuOpen(false)}>
              Personalizar
            </S.NavTab>
          </Link>
        </S.NavTabs>
        <S.CurrencyDisplay>Moeda atual: {currency}</S.CurrencyDisplay>
      </S.Navigation>
    </S.Container>
  )
}

