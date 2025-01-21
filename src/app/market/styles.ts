import styled from "styled-components"

export const Container = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media (min-width: 640px) {
    padding: 24px;
  }
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 24px;

  @media (max-width: 640px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`

export const LoadingText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.textSecondary};
`

