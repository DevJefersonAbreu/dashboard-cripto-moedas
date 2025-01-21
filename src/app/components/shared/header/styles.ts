import styled from "styled-components"

export const Container = styled.header`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  padding: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  @media (min-width: 768px) {
    padding: 16px;
  }
`

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: ${({ theme }) => theme.card};
`

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.card};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    display: block;
  }
`

export const Navigation = styled.nav<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const NavTabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
    width: auto;
  }
`

export const NavTab = styled.a`
  background: none;
  border: none;
  padding: 8px 0;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.accent};
    border-radius: 2px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 12px 0;
  }
`

export const CurrencyDisplay = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};

  @media (max-width: 768px) {
    margin-top: 16px;
    text-align: left;
  }
`

