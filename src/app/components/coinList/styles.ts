import styled from "styled-components"

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CoinCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

export const CoinHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`

export const CoinRank = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
  min-width: 24px;
`

export const CoinInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
`

export const CoinName = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`

export const CoinSymbol = styled.span`
  color: ${({ theme }) => theme.textSecondary};
`

export const CoinDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const DetailLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 4px;
`

export const DetailValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`

export const PriceChange = styled.span<{ $positive: boolean }>`
  color: ${(props) => (props.$positive ? props.theme.success : props.theme.error)};
  font-weight: 500;
`

