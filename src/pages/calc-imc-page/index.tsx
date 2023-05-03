import { useState } from "react";
import Navbar from "../../components/organism/Navbar";
import {
  ButtonWrapperMain,
  IMCTable,
  IMCTableWrapper,
  InputWrapperMain,
  PageWrapper,
} from "./styles";
import { IMCResult } from "./types";
import { calculateIMC } from "./imc-result";
import { InputText } from "primereact/inputtext";
import { IMCChart } from "./imc-chart";
import { Button } from "primereact/button";

const IMCPage = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<IMCResult | null>(null);

  const handleCalculateClick = () => {
    const imcResult = calculateIMC(height, weight);
    setResult(imcResult);
  };

  const handleResetClick = () => {
    setHeight("");
    setWeight("");
    setResult(null);
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <h1>Calculadora de IMC</h1>
        <InputWrapperMain>
          <label htmlFor="heightInput">Altura (m)</label>
          <InputText
            id="heightInput"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </InputWrapperMain>
        <InputWrapperMain>
          <label htmlFor="weightInput">Peso (kg)</label>
          <InputText
            id="weightInput"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </InputWrapperMain>
        <ButtonWrapperMain>
          <Button
            label="Calcular"
            icon="pi pi-check"
            onClick={handleCalculateClick}
          />
          <Button
            label="Limpar"
            icon="pi pi-times"
            onClick={handleResetClick}
            className="p-button-secondary p-ml-2"
          />
        </ButtonWrapperMain>
        {result && (
          <>
            <IMCChart result={result} />
            <IMCTableWrapper>
              <IMCTable>
                <thead>
                  <tr>
                    <th>Categoria</th>
                    <th>IMC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Abaixo do peso</td>
                    <td>&lt; 18,5</td>
                  </tr>
                  <tr>
                    <td>Peso normal</td>
                    <td>18,5 - 24,9</td>
                  </tr>
                  <tr>
                    <td>Sobrepeso</td>
                    <td>25,0 - 29,9</td>
                  </tr>
                  <tr>
                    <td>Obesidade grau I</td>
                    <td>30,0 - 34,9</td>
                  </tr>
                  <tr>
                    <td>Obesidade grau II</td>
                    <td>35,0 - 39,9</td>
                  </tr>
                  <tr>
                    <td>Obesidade grau III</td>
                    <td>&ge; 40,0</td>
                  </tr>
                </tbody>
              </IMCTable>
              <p>
                IMC: {result.value.toFixed(2)} - {result.label}
              </p>
              {/* <p>Recomendação: {result.recommendation}</p> */}
            </IMCTableWrapper>
          </>
        )}
      </PageWrapper>
    </>
  );
};

export default IMCPage;
