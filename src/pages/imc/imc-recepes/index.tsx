import { FC, useState } from "react";
import { ReceitasWrapper, Title } from "./styles";

import { Card } from "primereact/card";
import { Receitas } from "../../../api/view-model/receitas-imc-view-model";
import { ReceitasIMCProps } from "./types";
import { RecipesModal } from "../../../components/organism/pre-modals";

export const ReceitasIMC: FC<ReceitasIMCProps> = (props) => {
  const { content } = props;

  const [showRecipesModal, setShowRecipesModal] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState<Receitas>();

  return (
    <>
      <ReceitasWrapper>
        <Title>Receitas do dia</Title>
        {content.receitas.map((itens) => (
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
      </ReceitasWrapper>
      {showRecipesModal && (
        <RecipesModal
          recipesMock={recipeSelected}
          onHide={() => setShowRecipesModal(false)}
          showFavoriteButton={false}
          showRestrictions={false}
        />
      )}
    </>
  );
};
