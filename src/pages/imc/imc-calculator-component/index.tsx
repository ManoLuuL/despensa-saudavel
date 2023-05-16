import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { calculateIMC } from "../utils/calculate-imc";
import { ButtonWrapper, IMCCalculatorWrapper, InputWrapper } from "./styles";
import { IMCChart } from "../imc-chart";
import { IMCCalculatorProps } from "./types";
import { IMCResult } from "../types";

export function IMCCalculator(props: IMCCalculatorProps) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<IMCResult>();

  function handleCalculateClick() {
    const imcResult = calculateIMC(height, weight);
    setResult(imcResult);
  }

  return (
    <IMCCalculatorWrapper>
      <InputWrapper>
        <span className="p-float-label">
          <InputText
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <label htmlFor="height">Altura (m)</label>
        </span>
        <span className="p-float-label">
          <InputText
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label htmlFor="weight">Peso (kg)</label>
        </span>
      </InputWrapper>
      <ButtonWrapper>
        <Button
          label="Calcular"
          icon="pi pi-check"
          onClick={handleCalculateClick}
        />
      </ButtonWrapper>
      {result && <IMCChart result={result} />}
    </IMCCalculatorWrapper>
  );
}
