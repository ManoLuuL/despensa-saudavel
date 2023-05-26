import { FC, useState } from "react";
import Filters from "./filters/filter-ingredients";
import Navbar from "../../components/organism/Navbar";
import { CardsWrapper, FiltersWrapper, PageWrapper } from "./styles";
import {
  Receitas,
  ReceitasIMCViewModel,
} from "../../api/view-model/receitas-imc-view-model";
import receitasJson from "../../data/receitas.json";
import { Card } from "primereact/card";
import { RecipesModal } from "../../components/organism/pre-modals";

export const RecipeSearch: FC = () => {
  const data: ReceitasIMCViewModel = receitasJson;
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState<Receitas>();

  return (
    <>
      <Navbar />
      <PageWrapper>
        <FiltersWrapper>
          <Filters />
        </FiltersWrapper>

        <CardsWrapper>
          {data.receitas.map((itens, index) => (
            <Card
              className="md:w-18rem m-3"
              style={{ height: "104px", cursor: "pointer" }}
              title={itens.titulo}
              key={index}
              onClick={() => {
                setShowRecipe(true);
                setRecipeSelected(itens);
              }}
            />
          ))}
          {Array(50)
            .fill(0)
            .map((_, index) => (
              <Card className=" md:w-18rem m-3 " title="Teste" key={index}>
                Teste de card
              </Card>
            ))}
        </CardsWrapper>
      </PageWrapper>

      {showRecipe && (
        <RecipesModal
          recipes={recipeSelected}
          onHide={() => setShowRecipe(false)}
        />
      )}
    </>
  );
};
