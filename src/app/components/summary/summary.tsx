"use client"
import type React from "react"
import { useEffect, useState } from "react"
import * as S from "./styles"
import { useApi, type GlobalData } from "@/app/services/api"
import { ChevronRight } from "lucide-react"
import { useAppContext } from "@/app/context/appContext"

export const Summary: React.FC = () => {
  const [globalData, setGlobalData] = useState<GlobalData["data"] | null>(null)
  const [loading, setLoading] = useState(true)
  const api = useApi()
  const { currency } = useAppContext()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getGlobalData()
        setGlobalData(response.data)
      } catch (error) {
        console.error("Erro ao carregar dados:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 120000)
    return () => clearInterval(interval)
  }, [api, currency]) 

  if (loading) {
    return <S.LoadingContainer>Carregando dados do mercado...</S.LoadingContainer>
  }

  const summaryItems = [
    {
      title: "Criptomoedas Ativas",
      value: globalData?.active_cryptocurrencies ?? 0, 
      color: "#e0e7ff",
    },
    {
      title: "Dominância BTC",
      value: globalData?.market_cap_percentage?.btc
        ? `${globalData.market_cap_percentage.btc.toFixed(2)}%`
        : "0%", 
      color: "#f3e8ff",
    },
    {
      title: "Dominância ETH",
      value: globalData?.market_cap_percentage?.eth
        ? `${globalData.market_cap_percentage.eth.toFixed(2)}%`
        : "0%", 
      color: "#fce7f3",
    },
    {
      title: "Variação 24h",
      value: globalData?.market_cap_change_percentage_24h_usd
        ? `${globalData.market_cap_change_percentage_24h_usd.toFixed(2)}%`
        : "0%", 
      color: "#fef9c3",
    },
  ]

  return (
    <S.Container>
      <S.Title>Resumo do Mercado</S.Title>
      <S.Grid>
        {summaryItems.map((item, index) => (
          <S.Card key={index} $bgColor={item.color}>
            <S.CardHeader>
              <ChevronRight size={16} />
              <span>{item.title}</span>
            </S.CardHeader>
            <S.CardValue>{item.value}</S.CardValue>
          </S.Card>
        ))}
      </S.Grid>
    </S.Container>
  )
}
