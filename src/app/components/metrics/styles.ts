import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
`;

export const Card = styled.div<{ $highlighted?: boolean }>`
  background: ${props => props.$highlighted ? '#18181b' : 'white'};
  color: ${props => props.$highlighted ? 'white' : '#18181b'};
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;

export const MoreButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  opacity: 0.7;
`;

export const CardDate = styled.div`
  font-size: 12px;
  color: inherit;
  opacity: 0.7;
  margin-bottom: 16px;
`;

export const CardValue = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const CardChange = styled.div<{ $positive: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 12px;
  background: ${props => props.$positive ? '#dcfce7' : '#fee2e2'};
  color: ${props => props.$positive ? '#16a34a' : '#dc2626'};
`;

