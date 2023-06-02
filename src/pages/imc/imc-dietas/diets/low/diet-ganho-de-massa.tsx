import { Divider } from "primereact/divider";
import { FC, useState } from "react";
import {
  Receitas,
  ReceitasIMCViewModel,
} from "../../../../../api/view-model/receitas-imc-view-model";
import recipesRecomend from "../../../../../data/sujestions.json";
import { Card } from "primereact/card";
import { RecipesModal } from "../../../../../components/organism/pre-modals";

export const DietGanhoDeMassa: FC = () => {
  const receitasRecomendadas: ReceitasIMCViewModel = recipesRecomend;

  const [showRecipesModal, setShowRecipesModal] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState<Receitas>();

  return (
    <>
      <h3>Café da Manhã</h3>

      <Divider />
      <h3>Lanche da manhã</h3>

      <Divider />
      <h3>Almoço</h3>

      <Divider />
      <h3>Lanche da tarde</h3>

      <Divider />
      <h3>Jantar</h3>

      <Divider />

      <h3>Receitas:</h3>
      <div className="grid">
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

      {showRecipesModal && (
        <RecipesModal
          onHide={() => setShowRecipesModal(false)}
          recipes={recipeSelected}
        />
      )}
    </>
  );
};
