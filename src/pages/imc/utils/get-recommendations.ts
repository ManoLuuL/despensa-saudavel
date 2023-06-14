import { IMCResult } from "../types";

export const getRecommendations = (result?: IMCResult): string => {
  if (result && result.value < 18.5) {
    return "Você está abaixo do peso. Considere consultar um nutricionista para desenvolver um plano de alimentação saudável.";
  } else if (result && result.value >= 18.5 && result.value < 24.9) {
    return "Parabéns! Você está dentro de uma faixa de peso saudável. Manter uma alimentação equilibrada e atividade física regular.";
  } else if (result && result.value >= 25 && result.value < 29.9) {
    return "Você está acima do peso. Concentre-se em uma dieta equilibrada e aumente a atividade física. Considere consultar um profissional de saúde.";
  } else if (result && result.value >= 30) {
    return "Você é obeso. É importante consultar um profissional de saúde para orientação e apoio.";
  } else {
    return "";
  }
};
