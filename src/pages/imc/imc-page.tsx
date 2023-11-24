import {
  ContentWrapper,
  IMCTable,
  IMCTableWrapper,
  PageWrapper,
  ReceitasWrapper,
} from "./styles";
import { DietasIMC, IMCResult } from "./types";
import { useEffectOnce, useIsConnected, useToast } from "../../globals/hooks";

import { ButtonCustom } from "../../components/molecules";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";
import { ModalDietasIMC } from "./imc-dietas";
import { Navbar } from "../../components/organism";
import { ProgressSpinner } from "primereact/progressspinner";
import { ReceitasIMC } from "./imc-recepes";
import { ReceitasIMCViewModel } from "../../api/view-model/receitas-imc-view-model";
import TablesImc from "./utils/imc-table";
import { calculateIMC } from "./utils/calculate-imc";
import { getRecommendations } from "./utils/get-recommendations";
import recipesToDay from "../../data/recipes-to-day.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const IMCPage = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState<number>();
  const [result, setResult] = useState<IMCResult | null>(null);
  const [showDietasModal, setShowDietasModal] = useState(false);
  const [contentDieta, setContentDieta] = useState<DietasIMC>({
    category: "low",
    id: 0,
    title: "",
  });

  const receitasToDay: ReceitasIMCViewModel = recipesToDay;

  const [dietas, setDietas] = useState<DietasIMC[]>([]);

  const { connection } = useIsConnected();
  const navigate = useNavigate();
  const [conn, setConn] = useState(false);
  const { showWarning } = useToast();

  const handleCalculateClick = () => {
    const imcResult = calculateIMC(height, weight ?? 0);
    setResult(imcResult);

    if (imcResult.value) {
      const result = imcResult.value;
      if (result < 18.5) {
        setDietas([
          { title: "Dieta do crescimento acelerado", id: 1, category: "low" },
          { title: "Dieta ganho de massa", id: 2, category: "low" },
          { title: "Dieta de mega ganho de massa", id: 3, category: "low" },
        ]);
      } else if (result && result >= 18.5 && result < 24.9) {
        setDietas([
          {
            title: "Dieta do crescimento acelerado",
            id: 1,
            category: "medium",
          },
          { title: "Dieta ganho de massa", id: 2, category: "medium" },
          { title: "Dieta de mega ganho de massa", id: 3, category: "medium" },
        ]);
      } else if (result && result > 25) {
        setDietas([
          {
            title: "Dieta para emagrecer gastando pouco",
            id: 1,
            category: "high",
          },
          { title: "Dieta para redução de gordura", id: 2, category: "high" },
          { title: "Dieta detox", id: 3, category: "high" },
        ]);
      }
    }
  };

  const handleResetClick = () => {
    setHeight("");
    setWeight(undefined);
    setResult(null);
  };

  useEffectOnce(() => {
    if (connection === undefined) {
      navigate("/login");
      showWarning(
        "Usuario não identificado, por favor faça o login novamente!"
      );
    } else setConn(true);
  });

  return (
    <>
      {conn ? (
        <>
          <Navbar />
          <PageWrapper>
            <ReceitasWrapper>
              <ReceitasIMC content={receitasToDay} />
            </ReceitasWrapper>
            <ContentWrapper>
              <h1 style={{ textAlign: "center" }}>Calculadora de IMC</h1>
              <p>
                O cálculo feito é de modo geral, para todos os gêneros, sempre
                recomendamos orientações de nutricionistas e outros
                profissionais da área.
              </p>
              <div className="grid">
                <div className="col-5">
                  <span className="p-float-label p-input-icon-right w-full">
                    <InputMask
                      id="heightInput"
                      value={height}
                      onChange={(e) => setHeight(e.target.value ?? "")}
                      mask="9.99"
                    />
                    <label htmlFor="heightInput">Altura (m)</label>
                  </span>
                </div>
                <div className="col-1" />
                <div className="col-5">
                  <span className="p-float-label p-input-icon-right w-full">
                    <InputNumber
                      id="weightInput"
                      value={weight}
                      onChange={(e) => {
                        setWeight(e.value ?? undefined);
                      }}
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
                <div className="col-6">
                  <ButtonCustom
                    text="Limpar"
                    icon="close"
                    onClick={handleResetClick}
                    className="justify-content-end"
                    color="danger"
                  />
                </div>
                <div className="col-6">
                  <ButtonCustom
                    text="Calcular"
                    icon="calculate"
                    onClick={handleCalculateClick}
                    color="success"
                  />
                </div>
              </div>

              {result ? (
                result?.label === "Valores inválidos" ? (
                  <div className="grid align-items-center justify-content-center text-center">
                    <div className="col-12">
                      IMC: {result?.value.toFixed(2)} - {result?.label}
                    </div>
                  </div>
                ) : (
                  <div className="grid align-items-center justify-content-center text-center">
                    <div className="col-12">
                      IMC: {result?.value.toFixed(2)} - {result?.label}
                    </div>
                    <div className="col-12">
                      {getRecommendations(result ?? undefined)}
                    </div>
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
                    <p className="font-semibold">
                      Todas as dietas fornecidas foram retiradas de sites de
                      nutrição, caso queira saber mais sobre as receitas, vá na
                      pagina sobre do site ou consulte um profissional.
                    </p>
                  </div>
                )
              ) : (
                <></>
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
      ) : (
        <>
          <div className="card flex justify-content-center">
            <ProgressSpinner />
          </div>
        </>
      )}
    </>
  );
};
