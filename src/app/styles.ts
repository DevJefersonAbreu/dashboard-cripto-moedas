import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;

export const MainContent = styled.main`
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const DashboardContent = styled.div`
  margin-top: 24px;
`;

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

