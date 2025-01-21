import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 24px;
`;

export const LoadingText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text}80;
`;

