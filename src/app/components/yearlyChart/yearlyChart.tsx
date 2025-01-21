"use client";
import React from "react";
import * as S from "./styles";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface YearlyChartProps {
  data: {
    prices: [number, number][];
  };
}

export const YearlyChart: React.FC<YearlyChartProps> = ({ data }) => {
  const chartData = data.prices.map(([timestamp, price]) => ({
    date: new Date(timestamp).toLocaleDateString(),
    price: price,
  }));

  return (
    <S.ChartContainer>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </S.ChartContainer>
  );
};

