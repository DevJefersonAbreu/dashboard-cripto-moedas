import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 16px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text}80;
  margin-bottom: 32px;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

