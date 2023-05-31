import { FC, useState } from "react";
import { IMCDietasProps } from "./types";
import { Card } from "primereact/card";
import { Modal } from "../../../components/organism/modal";
import {
  Receitas,
  ReceitasIMCViewModel,
} from "../../../api/view-model/receitas-imc-view-model";
import recipesRecomend from "../../../data/sujestions.json";
import { RecipesModal } from "../../../components/organism/pre-modals";

export const ModalDietasIMC: FC<IMCDietasProps> = (props) => {
  const { onHide } = props;

  const receitasRecomendadas: ReceitasIMCViewModel = recipesRecomend;

  const [showRecipesModal, setShowRecipesModal] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState<Receitas>();

  return (
    <>
      <Modal onHide={onHide} title="Teste">
        <h3 style={{ color: "red" }}>
          Não nos responsabilizamos por resultados negativos, lembre-se de
          sempre buscar ajuda médica e de profissionais da área
        </h3>
        {receitasRecomendadas.receitas.map((itens) => (
          <div key={itens.titulo} className="col-12">
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
      </Modal>

      {showRecipesModal && (
        <RecipesModal
          onHide={() => setShowRecipesModal(false)}
          recipes={recipeSelected}
        />
      )}
    </>
  );
};
