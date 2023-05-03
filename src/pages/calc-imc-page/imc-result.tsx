import { IMCResult } from "./types";

export function calculateIMC(height: string, weight: string): IMCResult {
  const heightInMeters = parseFloat(height);
  const weightInKg = parseFloat(weight);

  if (isNaN(heightInMeters) || isNaN(weightInKg)) {
    return { label: "Valores inválidos", value: 0, color: "gray" };
  }

  const imc = weightInKg / (heightInMeters * heightInMeters);
  const roundedIMC = Math.round(imc * 100) / 100;

  let label = "";
  let color = "";

  if (roundedIMC < 18.5) {
    label = "Abaixo do peso";
    color = "rgb(255, 193, 7)";
  } else if (roundedIMC < 25) {
    label = "Peso normal";
    color = "rgb(40, 167, 69)";
  } else if (roundedIMC < 30) {
    label = "Sobrepeso";
    color = "rgb(255, 140, 0)";
  } else if (roundedIMC < 35) {
    label = "Obesidade grau I";
    color = "rgb(255, 87, 51)";
  } else if (roundedIMC < 40) {
    label = "Obesidade grau II";
    color = "rgb(220, 53, 69)";
  } else {
    label = "Obesidade grau III";
    color = "rgb(126, 5, 35)";
  }

  return { label, value: roundedIMC, color };
}
