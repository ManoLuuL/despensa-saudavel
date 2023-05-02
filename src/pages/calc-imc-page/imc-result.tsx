import { IMCResult } from "./types";

export const calculateIMC = (weight: number, height: number): IMCResult => {
  const value = weight / (height * height);
  let label = "";
  let color = "";

  if (value < 18.5) {
    label = "Abaixo do peso";
    color = "#2196F3";
  } else if (value >= 18.5 && value < 25) {
    label = "Peso normal";
    color = "#4CAF50";
  } else if (value >= 25 && value < 30) {
    label = "Sobrepeso";
    color = "#FFC107";
  } else {
    label = "Obesidade";
    color = "#F44336";
  }

  return { value, label, color };
};
