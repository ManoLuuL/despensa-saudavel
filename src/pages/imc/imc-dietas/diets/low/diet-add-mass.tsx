import { Divider } from "primereact/divider";
import { FC, useState } from "react";
import {
  Receitas,
  ReceitasIMCViewModel,
} from "../../../../../api/view-model/receitas-imc-view-model";
import recipesRecomend from "../../../../../data/sujestions.json";
import { Card } from "primereact/card";
import { RecipesModal } from "../../../../../components/organism/pre-modals";

export const DietAddMass: FC = () => {
  const receitasRecomendadas: ReceitasIMCViewModel = recipesRecomend;

  const [showRecipesModal, setShowRecipesModal] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState<Receitas>();

  return (
    <>
      <h3>Café da Manhã</h3>

      <p> Whey, ovos, aveia e frutas</p>
      <p>Batata doce com frango desfiado</p>
      <p>Mingau de água com aveia, Nitrohard e frutas</p>

      <Divider />
      <h3>Lanche da manhã</h3>

      <p>Ovos ou queijo branco ou iogurte e frutas com aveia</p>
      <p>Pão de forma integral, queijo branco ou ovos, com frutas e granola</p>
      <p>Iogurte, Whey, aveia e frutas</p>

      <Divider />
      <h3>Almoço</h3>

      <p>Salmão ou Tilápia, arroz, feijão, brócolis, alface, tomate e pepino</p>
      <p>Arroz branco, brócolis e carne moída</p>
      <p>Purê de Batata inglesa com carne moída</p>

      <Divider />
      <h3>Lanche da tarde</h3>

      <p>Nitrohard, banana e aveia</p>
      <p>Iogurte, frutas, granola e Nitrohard</p>
      <p>Macarrão cozida e carne moída</p>

      <Divider />
      <h3>Jantar</h3>

      <p>Filé de Frango ou Tilápia, arroz, brócolis, alface, tomate e pepino</p>
      <p>Mandioca cozida, legumes e filé de frango grelhado</p>
      <p>Purê de mandioquinha cozida com carne moída</p>

      <Divider />

      <h3>Algumas receitas que possam ajudar:</h3>
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
          recipesMock={recipeSelected}
          showFavoriteButton={false}
        />
      )}
    </>
  );
};
