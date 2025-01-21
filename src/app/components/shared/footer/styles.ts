import styled from "styled-components"

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.textSecondary};
  padding: 0.75rem;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06);

  @media (min-width: 768px) {
    padding: 1rem;
  }
`

export const FooterContent = styled.div`
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

