"use client";
import React from "react";
import * as S from "./styles";

export const CoinChart: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Gráfico de Preços</S.Title>
      </S.Header>
      <S.ChartContainer>
        <S.PlaceholderText>
          Gráfico será implementado em breve
        </S.PlaceholderText>
      </S.ChartContainer>
    </S.Container>
  );
};

