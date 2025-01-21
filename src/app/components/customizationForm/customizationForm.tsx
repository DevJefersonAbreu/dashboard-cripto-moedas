"use client";
import React from "react";
import * as S from "./styles";
import { Sun, Moon, DollarSign } from 'lucide-react';
import { useAppContext } from "../../context/appContext";
import { useRouter } from 'next/navigation';

export const CustomizationForm: React.FC = () => {
  const { theme, setTheme, currency, setCurrency } = useAppContext();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("theme", theme);
    localStorage.setItem("currency", currency);
    router.push('/');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormGroup>
        <S.Label htmlFor="theme">Tema</S.Label>
        <S.RadioGroup>
          <S.RadioLabel>
            <S.RadioInput
              type="radio"
              id="light"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={() => setTheme("light")}
            />
            <S.RadioButton>
              <Sun size={20} />
              Claro
            </S.RadioButton>
          </S.RadioLabel>
          <S.RadioLabel>
            <S.RadioInput
              type="radio"
              id="dark"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={() => setTheme("dark")}
            />
            <S.RadioButton>
              <Moon size={20} />
              Escuro
            </S.RadioButton>
          </S.RadioLabel>
        </S.RadioGroup>
      </S.FormGroup>
      <S.FormGroup>
        <S.Label htmlFor="currency">Moeda</S.Label>
        <S.Select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value as "USD" | "EUR" | "BRL")}
        >
          <option value="USD">USD (Dólar Americano)</option>
          <option value="EUR">EUR (Euro)</option>
          <option value="BRL">BRL (Real Brasileiro)</option>
        </S.Select>
      </S.FormGroup>
      <S.SubmitButton type="submit">
        <DollarSign size={20} />
        Salvar Preferências
      </S.SubmitButton>
    </S.Form>
  );
};

