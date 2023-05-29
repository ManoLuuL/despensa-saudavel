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
import recipesToDay from "../../data/recipes-to-day.json";
import recipesRecomend from "../../data/sujestions.json";
import {
  Receitas,
  ReceitasIMCViewModel,
} from "../../api/view-model/receitas-imc-view-model";
import { ReceitasIMC } from "./imc-recepes";
import { Card } from "primereact/card";
import { RecipesModal } from "../../components/organism/pre-modals";

export const IMCPage = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<IMCResult | null>(null);
  const [showRecipesModal, setShowRecipesModal] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState<Receitas>();

  const receitasToDay: ReceitasIMCViewModel = recipesToDay;
  const receitasRecomendadas: ReceitasIMCViewModel = recipesRecomend;

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
                  {receitasRecomendadas.receitas.map((itens) => (
                    <div key={itens.titulo} className="col-4">
                      <Card
                        title={itens.titulo}
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setShowRecipesModal(true);
                          setRecipeSelected(itens);
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

      {showRecipesModal && (
        <RecipesModal
          recipes={recipeSelected}
          onHide={() => setShowRecipesModal(false)}
        />
      )}
    </>
  );
};
