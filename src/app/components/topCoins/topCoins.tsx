"use client"
import type React from "react"
import { useEffect, useState } from "react"
import * as S from "./styles"
import { useApi, type Coin } from "@/app/services/api"
import Image from "next/image"
import { useAppContext } from "@/app/context/appContext"

export const TopCoins: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const api = useApi()
  const { currency } = useAppContext()

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await api.getTopCoins(5)
        setCoins(data)
      } catch (error) {
        console.error("Error fetching coins:", error)
        setError("Failed to load top coins. Please try again later.")
      } finally {
        setLoading(false)
      }
    }
  
    fetchCoins()
    const interval = setInterval(fetchCoins, 120000)
    return () => clearInterval(interval)
  }, [currency, api]) 
  

  if (loading) {
    return <S.LoadingContainer>Carregando criptomoedas...</S.LoadingContainer>
  }

  if (error) {
    return <S.ErrorContainer>{error}</S.ErrorContainer>
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Top 5 Criptomoedas</S.Title>
        <S.SubTitle>Por Capitalização de Mercado</S.SubTitle>
      </S.Header>
      <S.ResponsiveWrapper>
        {coins.map((coin) => (
          <S.CoinCard key={coin.id}>
            <S.CoinInfo>
              <Image
                src={coin.image || "/placeholder.svg"}
                alt={coin.name}
                width={24}
                height={24}
                style={{ borderRadius: "50%" }}
              />
              <S.CoinName>{coin.name}</S.CoinName>
              <S.CoinSymbol>({coin.symbol.toUpperCase()})</S.CoinSymbol>
            </S.CoinInfo>
            <S.CoinDetails>
              <S.DetailItem>
                <S.DetailLabel>Preço:</S.DetailLabel>
                <S.DetailValue>
                  {currency} {coin.current_price.toLocaleString()}
                </S.DetailValue>
              </S.DetailItem>
              <S.DetailItem>
                <S.DetailLabel>24h %:</S.DetailLabel>
                <S.PriceChange $positive={coin.price_change_percentage_24h > 0}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </S.PriceChange>
              </S.DetailItem>
              <S.DetailItem>
                <S.DetailLabel>Cap. Mercado:</S.DetailLabel>
                <S.DetailValue>
                  {currency} {(coin.market_cap / 1e9).toFixed(2)}B
                </S.DetailValue>
              </S.DetailItem>
            </S.CoinDetails>
          </S.CoinCard>
        ))}
      </S.ResponsiveWrapper>
      <S.ApiInfo>
        <p>Dados fornecidos pela CoinGecko API</p>
        <p>Atualizado a cada 2 minutos</p>
      </S.ApiInfo>
    </S.Container>
  )
}

