import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { IMCChart } from "./imc-chart";
import { IMCResult } from "./types";
import { calculateIMC } from "./imc-result";

export function IMCCalculator() {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [result, setResult] = useState<IMCResult | null>(null);

  function handleCalculate() {
    const imc = calculateIMC(weight, height);
    setResult(imc);
  }

  return (
    <div className="p-grid p-nogutter p-align-center">
      <div className="p-col-12 p-md-4">
        <div className="p-field">
          <label htmlFor="weight">Peso (kg)</label>
          <InputText
            id="weight"
            type="number"
            value={weight as unknown as string}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <div className="p-field">
          <label htmlFor="height">Altura (m)</label>
          <InputText
            id="height"
            type="number"
            value={height as unknown as string}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        <div className="p-field">
          <Button label="Calcular" onClick={handleCalculate} />
        </div>
      </div>
      <div className="p-col-12 p-md-8">
        {result && <IMCChart result={result} />}
      </div>
    </div>
  );
}
