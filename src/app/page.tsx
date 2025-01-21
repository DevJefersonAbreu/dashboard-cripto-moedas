"use client";
import React from "react";
import * as S from "./styles";
import { Summary } from "@/app/components/summary/summary";
import { Metrics } from "@/app/components/metrics/metrics";
import { Charts } from "@/app/components/charts/charts";
import { TopCoins } from "@/app/components/topCoins/topCoins";

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.MainContent>
        <S.DashboardContent>
          <Summary />
          <Metrics />
          <Charts />
          <S.ChartsGrid>
            <TopCoins />
          </S.ChartsGrid>
        </S.DashboardContent>
      </S.MainContent>
    </S.Container>
  );
};

export default Home;

