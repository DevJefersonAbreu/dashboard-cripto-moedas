import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 24px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  display: none;
`;

export const RadioButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.text};

  ${RadioInput}:checked + & {
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.secondary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const Select = styled.select`
  padding: 12px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.border};
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.card};
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.card};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}50;
  }
`;

