"use client";
import React from "react";
import * as S from "./styles";
import { TrendingUp, TrendingDown } from 'lucide-react';

const metricsData = [
  {
    title: "Ordens Criadas",
    value: "$124,970",
    date: "Jan 14 - Fev 14 / 24",
    change: "+12.98%",
    positive: true
  },
  {
    title: "Volume Total",
    value: "$2,145,132.80",
    date: "Jan 14 - Fev 14 / 24",
    change: "+4.98%",
    positive: true,
    highlighted: true
  },
  {
    title: "Volume 24h",
    value: "$890.00",
    date: "Jan 14 - Fev 14 / 24",
    change: "+0.17%",
    positive: true
  }
];

export const Metrics: React.FC = () => {
  return (
    <S.Container>
      {metricsData.map((metric, index) => (
        <S.Card key={index} $highlighted={metric.highlighted}>
          <S.CardHeader>
            <S.CardTitle>{metric.title}</S.CardTitle>
            <S.MoreButton>•••</S.MoreButton>
          </S.CardHeader>
          <S.CardDate>{metric.date}</S.CardDate>
          <S.CardValue>{metric.value}</S.CardValue>
          <S.CardChange $positive={metric.positive}>
            {metric.positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            {metric.change}
          </S.CardChange>
        </S.Card>
      ))}
    </S.Container>
  );
};

