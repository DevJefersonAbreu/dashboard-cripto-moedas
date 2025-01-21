import styled from "styled-components"

export const Container = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  @media (min-width: 768px) {
    padding: 24px;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  color: ${({ theme }) => theme.textSecondary};
`

export const Header = styled.div`
  margin-bottom: 24px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const SubTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
  margin-top: 4px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    display: table;
    width: 100%;
    border-collapse: collapse;
  }
`

export const CoinCard = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    display: table-row;
    background: none;
    box-shadow: none;
    padding: 0;

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.border};
    }
  }
`

export const CoinInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    display: table-cell;
    padding: 16px 12px;
    margin-bottom: 0;
  }
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
  gap: 8px;

  @media (min-width: 768px) {
    display: contents;
  }
`

export const DetailItem = styled.div`
  @media (min-width: 768px) {
    display: table-cell;
    padding: 16px 12px;
  }
`

export const DetailLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSecondary};
  display: block;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    display: none;
  }
`

export const DetailValue = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`

export const PriceChange = styled.span<{ $positive: boolean }>`
  color: ${(props) => (props.$positive ? props.theme.success : props.theme.error)};
  font-weight: 500;
`

export const ApiInfo = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.border};
  font-size: 12px;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;

  p {
    margin: 4px 0;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  color: ${({ theme }) => theme.error};
  font-weight: 500;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 16px;
  }
`

