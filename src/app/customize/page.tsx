"use client";
import React from "react";
import * as S from "./styles";
import { CustomizationForm } from "../components/customizationForm/customizationForm";

const CustomizePage: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Personalizar Dashboard</S.Title>
      <S.Description>
        Ajuste as configurações do seu dashboard de acordo com suas preferências.
        As alterações serão salvas automaticamente e aplicadas em todo o site.
      </S.Description>
      <CustomizationForm />
    </S.Container>
  );
};

export default CustomizePage;

