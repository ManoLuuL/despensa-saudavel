import { useState } from "react";
import Navbar from "../../components/organism/Navbar";
import {
  ButtonWrapperMain,
  ContentWrapper,
  IMCTable,
  IMCTableWrapper,
  PageWrapper,
  ReceitasWrapper,
} from "./styles";
import { IMCResult } from "./types";
import { calculateIMC } from "./utils/calculate-imc";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import TablesImc from "./utils/imc-table";
import receitasJson from "../../data/receitas.json";
import { ReceitasIMCViewModel } from "../../api/view-model/receitas-imc-view-model";
import { ReceitasIMC } from "./imc-recepes";
import { Card } from "primereact/card";

const IMCPage = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<IMCResult | null>(null);

  const data: ReceitasIMCViewModel = receitasJson;

  const handleCalculateClick = () => {
    const imcResult = calculateIMC(height, weight);
    setResult(imcResult);
  };

  const handleResetClick = () => {
    setHeight("");
    setWeight("");
    setResult(null);
  };

  const getRecommendations = (): string => {
    if (result && result.value < 18.5) {
      return "You are underweight. Consider consulting a nutritionist to develop a healthy eating plan.";
    } else if (result && result.value >= 18.5 && result.value < 24.9) {
      return "Congratulations! You are within a healthy weight range. Maintain a balanced diet and regular physical activity.";
    } else if (result && result.value >= 25 && result.value < 29.9) {
      return "You are overweight. Focus on a balanced diet and increase physical activity. Consider consulting a healthcare professional.";
    } else if (result && result.value >= 30) {
      return "You are obese. It is important to consult a healthcare professional for guidance and support.";
    } else {
      return "";
    }
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <ReceitasWrapper>
          <ReceitasIMC content={data} />
        </ReceitasWrapper>
        <ContentWrapper>
          <h1 style={{ textAlign: "center" }}>Calculadora de IMC</h1>
          <div className="grid">
            <div className="col-6">
              <span className="p-float-label p-input-icon-right w-full">
                <InputText
                  id="heightInput"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
                <label htmlFor="heightInput">Altura (m)</label>
              </span>
            </div>
            <div className="col-6">
              <span className="p-float-label p-input-icon-right w-full">
                <InputText
                  id="weightInput"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <label htmlFor="weightInput">Peso (kg)</label>
              </span>
            </div>
          </div>
          <div className="grid">
            <ButtonWrapperMain className="col-12 flex justify-content-between gap-3">
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
          </div>

          {result && (
            <>
              <p>
                IMC: {result.value.toFixed(2)} - {result.label}
              </p>
              <IMCTableWrapper>
                <IMCTable>
                  <TablesImc />
                </IMCTable>
                <div
                  style={{
                    padding: "10px",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </IMCTableWrapper>
              <div>{getRecommendations()}</div>
              <div>Recomendações:</div>
              <div className="grid justify-content-center align-items-center">
                {data.receitas.map((itens) => (
                  <div key={itens.titulo} className="col-3">
                    <Card
                      style={{
                        width: "60%",
                      }}
                      header={
                        <img
                          className="flex align-items-center"
                          src={itens.imagem}
                          alt=""
                          style={{
                            height: "190px",
                          }}
                        />
                      }
                      title={itens.titulo}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default IMCPage;
