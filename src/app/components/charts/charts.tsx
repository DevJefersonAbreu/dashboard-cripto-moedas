"use client";
import React from "react";
import * as S from "./styles";

export const Charts: React.FC = () => {
  return (
    <S.Container>
      <S.ChartCard>
        <S.ChartHeader>
          <S.Title>Cryptocurrency Performance</S.Title>
        </S.ChartHeader>
        <S.ChartContent>
          <S.PlaceholderText>Chart visualization will be implemented soon</S.PlaceholderText>
        </S.ChartContent>
      </S.ChartCard>
    </S.Container>
  );
};

