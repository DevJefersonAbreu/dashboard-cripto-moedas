"use client"
import type React from "react"
import * as S from "./styles"
import type { Coin } from "@/app/services/api"
import Image from "next/image"
import { useAppContext } from "../../context/appContext"

interface CoinListProps {
  coins: Coin[]
}

export const CoinList: React.FC<CoinListProps> = ({ coins }) => {
  const { currency } = useAppContext()

  return (
    <S.ListContainer>
      {coins.map((coin) => (
        <S.CoinCard key={coin.id}>
          <S.CoinHeader>
            <S.CoinRank>{coin.market_cap_rank}</S.CoinRank>
            <S.CoinInfo>
              <Image
                src={coin.image || "/placeholder.svg"}
                alt={coin.name}
                width={24}
                height={24}
                style={{ borderRadius: "50%" }}
              />
              <S.CoinName>{coin.name}</S.CoinName>
              <S.CoinSymbol>{coin.symbol.toUpperCase()}</S.CoinSymbol>
            </S.CoinInfo>
          </S.CoinHeader>
          <S.CoinDetails>
            <S.DetailItem>
              <S.DetailLabel>Preço</S.DetailLabel>
              <S.DetailValue>
                {currency} {coin.current_price.toLocaleString()}
              </S.DetailValue>
            </S.DetailItem>
            <S.DetailItem>
              <S.DetailLabel>24h %</S.DetailLabel>
              <S.PriceChange $positive={coin.price_change_percentage_24h > 0}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </S.PriceChange>
            </S.DetailItem>
            <S.DetailItem>
              <S.DetailLabel>Cap. Mercado</S.DetailLabel>
              <S.DetailValue>
                {currency} {coin.market_cap.toLocaleString()}
              </S.DetailValue>
            </S.DetailItem>
            <S.DetailItem>
              <S.DetailLabel>Volume (24h)</S.DetailLabel>
              <S.DetailValue>
                {currency} {coin.total_volume.toLocaleString()}
              </S.DetailValue>
            </S.DetailItem>
          </S.CoinDetails>
        </S.CoinCard>
      ))}
    </S.ListContainer>
  )
}

