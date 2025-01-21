"use client";
import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { api } from "@/app/services/api";
import { YearlyChart } from "../components/yearlyChart/yearlyChart";

// Define a interface para os dados anuais
interface YearlyData {
  prices: [number, number][]; // Lista de pares [timestamp, price]
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

const YearlyAnalysisPage: React.FC = () => {
  const [yearlyData, setYearlyData] = useState<YearlyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchYearlyData = async () => {
      try {
        const data = await api.getCoinHistory("bitcoin", 365);
        setYearlyData(data);
      } catch (error) {
        console.error("Erro ao carregar dados anuais:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchYearlyData();
  }, []);

  return (
    <S.Container>
      <S.Title>Análise Anual</S.Title>
      {loading ? (
        <S.LoadingText>Carregando dados anuais...</S.LoadingText>
      ) : (
        yearlyData && <YearlyChart data={yearlyData} />
      )}
    </S.Container>
  );
};

export default YearlyAnalysisPage;
