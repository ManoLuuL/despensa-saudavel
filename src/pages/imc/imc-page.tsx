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
import { DietasIMC, IMCResult } from "./types";
import { calculateIMC } from "./utils/calculate-imc";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import TablesImc from "./utils/imc-table";
import recipesToDay from "../../data/recipes-to-day.json";
import { ReceitasIMCViewModel } from "../../api/view-model/receitas-imc-view-model";
import { ReceitasIMC } from "./imc-recepes";
import { Card } from "primereact/card";
import { ModalDietasIMC } from "./imc-dietas";

export const IMCPage = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<IMCResult | null>(null);
  const [showDietasModal, setShowDietasModal] = useState(false);

  const receitasToDay: ReceitasIMCViewModel = recipesToDay;

  const [dietas, setDietas] = useState<DietasIMC[]>([]);

  const handleCalculateClick = () => {
    const imcResult = calculateIMC(height, weight);
    setResult(imcResult);

    if (imcResult.value) {
      const result = imcResult.value;
      if (result < 18.5) {
        setDietas([
          { title: "Dieta 1", content: "Receita X e Y", recipes: [] },
          { title: "Dieta 2", content: "Receita X e Y", recipes: [] },
          { title: "Dieta 3", content: "Receita X e Y", recipes: [] },
        ]);
      } else if (result && result >= 18.5 && result < 24.9) {
        setDietas([
          { title: "Dieta 1", content: "Receita X e Y", recipes: [] },
          { title: "Dieta 2", content: "Receita X e Y", recipes: [] },
          { title: "Dieta 3", content: "Receita X e Y", recipes: [] },
        ]);
      } else if (result && result >= 25 && result < 29.9) {
        setDietas([
          { title: "Dieta 1", content: "Receita X e Y", recipes: [] },
          { title: "Dieta 2", content: "Receita X e Y", recipes: [] },
          { title: "Dieta 3", content: "Receita X e Y", recipes: [] },
        ]);
      } else if (result && result >= 30) {
        setDietas([
          { title: "Dieta 1", content: "Receita X e Y", recipes: [] },
          { title: "Dieta 2", content: "Receita X e Y", recipes: [] },
          { title: "Dieta 3", content: "Receita X e Y", recipes: [] },
        ]);
      }
    }
  };

  const handleResetClick = () => {
    setHeight("");
    setWeight("");
    setResult(null);
  };

  const getRecommendations = (): string => {
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

  return (
    <>
      <Navbar />
      <PageWrapper>
        <ReceitasWrapper>
          <ReceitasIMC content={receitasToDay} />
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
            <div className="grid align-items-center justify-content-center text-center">
              <div className="col-12">
                IMC: {result.value.toFixed(2)} - {result.label}
              </div>
              <div className="col-12">{getRecommendations()}</div>
              <div className="col-12">
                <IMCTableWrapper>
                  <IMCTable>
                    <TablesImc />
                  </IMCTable>
                </IMCTableWrapper>
              </div>

              <div className="col-12">Recomendações:</div>
              <div className="col-12 justify-content-center">
                <div className="grid justify-content-center align-items-center">
                  {dietas.map((itens) => (
                    <div key={itens.title} className="col-4">
                      <Card
                        title={itens.title}
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setShowDietasModal(true);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </ContentWrapper>
      </PageWrapper>

      {showDietasModal && (
        <ModalDietasIMC onHide={() => setShowDietasModal(false)} />
      )}
    </>
  );
};
