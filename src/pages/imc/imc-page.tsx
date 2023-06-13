import { useState } from "react";
import Navbar from "../../components/organism/Navbar";
import {
  ContentWrapper,
  IMCTable,
  IMCTableWrapper,
  PageWrapper,
  ReceitasWrapper,
} from "./styles";
import { DietasIMC, IMCResult } from "./types";
import { calculateIMC } from "./utils/calculate-imc";
import { InputText } from "primereact/inputtext";
import TablesImc from "./utils/imc-table";
import recipesToDay from "../../data/recipes-to-day.json";
import { ReceitasIMCViewModel } from "../../api/view-model/receitas-imc-view-model";
import { ReceitasIMC } from "./imc-recepes";
import { Card } from "primereact/card";
import { ModalDietasIMC } from "./imc-dietas";
import { Divider } from "primereact/divider";
import { Button } from "../../components/molecules/button-custom";

export const IMCPage = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<IMCResult | null>(null);
  const [showDietasModal, setShowDietasModal] = useState(false);
  const [contentDieta, setContentDieta] = useState<DietasIMC>({
    category: "low",
    id: 0,
    title: "",
  });

  const receitasToDay: ReceitasIMCViewModel = recipesToDay;

  const [dietas, setDietas] = useState<DietasIMC[]>([]);

  const handleCalculateClick = () => {
    const imcResult = calculateIMC(height, weight);
    setResult(imcResult);

    if (imcResult.value) {
      const result = imcResult.value;
      if (result < 18.5) {
        setDietas([
          { title: "Dieta 1", id: 1, category: "low" },
          { title: "Dieta 2", id: 2, category: "low" },
          { title: "Dieta 3", id: 3, category: "low" },
        ]);
      } else if (result && result >= 18.5 && result < 24.9) {
        setDietas([
          { title: "Dieta 1", id: 1, category: "medium" },
          { title: "Dieta 2", id: 2, category: "medium" },
          { title: "Dieta 3", id: 3, category: "medium" },
        ]);
      } else if (result && result >= 25 && result >= 29.9) {
        setDietas([
          {
            title: "Dieta para emagrecer gastando pouco",
            id: 1,
            category: "high",
          },
          { title: "Dieta para redução de gordura", id: 2, category: "high" },
          { title: "Dieta geral", id: 3, category: "high" },
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
          <div
            className="grid p-3 flex"
            style={{
              width: "20vw",
            }}
          >
            <div className="col-6 justify-content-start">
              <Button
                text="Calcular"
                icon="calculate"
                onClick={handleCalculateClick}
                color="success"
              />
            </div>
            <div className="col-6">
              <Button
                text="Limpar"
                icon="close"
                onClick={handleResetClick}
                className="justify-content-end"
                color="danger"
              />
            </div>
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
                          setContentDieta(itens);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <Divider />
              <p>
                Todas as dietas fornecidas foram retiradas de sites de nutrição,
                para saber mais acesse a pagina sobre ou consulte um
                nutricionista
              </p>
            </div>
          )}
        </ContentWrapper>
      </PageWrapper>

      {showDietasModal && (
        <ModalDietasIMC
          onHide={() => setShowDietasModal(false)}
          {...contentDieta}
        />
      )}
    </>
  );
};
