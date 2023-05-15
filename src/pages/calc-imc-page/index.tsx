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
import { calculateIMC } from "./imc-result";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import TablesImc from "./table-imc";
import receitasJson from "../../data/receitas.json";
import { ReceitasIMCViewModel } from "../../api/view-model/receitas-imc-view-model";
import { ReceitasIMC } from "./receitas";

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
                >
                  <p>
                    IMC: {result.value.toFixed(2)} - {result.label}
                  </p>
                </div>
              </IMCTableWrapper>
              <p>Recomendação:</p>
              <ReceitasIMC content={data} />
            </>
          )}
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default IMCPage;
