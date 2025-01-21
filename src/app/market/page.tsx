"use client"
import type React from "react"
import { useEffect, useState } from "react"
import * as S from "./styles"
import { api, type Coin } from "@/app/services/api"
import { CoinList } from "../components/coinList/coinList"

const MarketPage: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const data = await api.getTopCoins(100)
        setCoins(data)
      } catch (error) {
        console.error("Erro ao carregar moedas:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCoins()
  }, [])

  return (
    <S.Container>
      <S.Title>Mercado de Criptomoedas</S.Title>
      {loading ? <S.LoadingText>Carregando dados do mercado...</S.LoadingText> : <CoinList coins={coins} />}
    </S.Container>
  )
}

export default MarketPage

