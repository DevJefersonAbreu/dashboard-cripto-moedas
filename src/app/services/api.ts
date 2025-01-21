"use client"

import { useAppContext } from "../context/appContext";

const BASE_URL = "https://api.coingecko.com/api/v3";


export interface MarketChartData {
  prices: [number, number][]; 
  market_caps: [number, number][];
  total_volumes: [number, number][];
}


export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
}


export interface GlobalData {
  data: {
    active_cryptocurrencies: number;
    total_market_cap: {
      [key: string]: number; 
    };
    total_volume: {
      [key: string]: number;
    };
    market_cap_percentage: {
      [key: string]: number; 
    };
    market_cap_change_percentage_24h_usd: number;
  };
}

const createApi = (currency: string) => ({
  getTopCoins: async (perPage: number = 10): Promise<Coin[]> => {
    try {
      const response = await fetch(
        `${BASE_URL}/coins/markets?vs_currency=${currency.toLowerCase()}&order=market_cap_desc&per_page=${perPage}&sparkline=false`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: Coin[] = await response.json();
      return data;
    } catch (error) {
      console.error("Error in getTopCoins:", error);
      throw error;
    }
  },

  getGlobalData: async (): Promise<GlobalData> => {
    try {
      const response = await fetch(`${BASE_URL}/global`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: GlobalData = await response.json();
      return data;
    } catch (error) {
      console.error("Error in getGlobalData:", error);
      throw error;
    }
  },

  getCoinHistory: async (coinId: string, days: number = 30): Promise<MarketChartData> => {
    try {
      const response = await fetch(
        `${BASE_URL}/coins/${coinId}/market_chart?vs_currency=${currency.toLowerCase()}&days=${days}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: MarketChartData = await response.json();
      return data;
    } catch (error) {
      console.error("Error in getCoinHistory:", error);
      throw error;
    }
  },
});


export const useApi = () => {
  const { currency } = useAppContext();
  return createApi(currency);
};


export const api = createApi("USD");
