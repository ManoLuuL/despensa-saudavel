import { FC, useState } from "react";
import Filters from "./filters/filter-ingredients";
import Navbar from "../../components/organism/Navbar";
import { CardsWrapper, FiltersWrapper, PageWrapper } from "./styles";
import {
  Receitas,
  ReceitasIMCViewModel,
} from "../../api/view-model/receitas-imc-view-model";
import { Card } from "primereact/card";
import { RecipesModal } from "../../components/organism/pre-modals";
import newReceitas from "../../data/search-recipes.json";

export const RecipeSearch: FC = () => {
  const newData: ReceitasIMCViewModel = newReceitas;

  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState<Receitas>();
  const [receips, setReceips] = useState<Receitas[]>(newData.receitas);

  return (
    <>
      <Navbar />
      <PageWrapper>
        <FiltersWrapper>
          <Filters setNewReceips={setReceips} />
        </FiltersWrapper>

        <CardsWrapper>
          {receips.map((itens, index) => (
            <Card
              className="md:w-14rem m-2"
              style={{ height: "104px", cursor: "pointer" }}
              title={itens.titulo}
              key={index}
              onClick={() => {
                setShowRecipe(true);
                setRecipeSelected(itens);
              }}
            />
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
