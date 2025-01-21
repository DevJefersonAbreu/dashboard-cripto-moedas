import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;
`

export const ChartCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  @media (min-width: 768px) {
    padding: 24px;
  }
`

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const ChartContent = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${({ theme }) => theme.border};
  border-radius: 8px;

  @media (min-width: 768px) {
    height: 300px;
  }
`

export const PlaceholderText = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

