import styled from "styled-components"

export const Container = styled.div`
  margin-bottom: 24px;
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

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Card = styled.div<{ $bgColor: string }>`
  background: ${({ theme }) => theme.card};
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-left: 4px solid ${({ $bgColor }) => $bgColor};
  
  @media (max-width: 639px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;
  margin-bottom: 8px;
`

export const CardValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

