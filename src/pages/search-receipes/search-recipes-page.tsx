import { FC, useState } from "react";
import Filters from "./filters/filter-ingredients";
import Navbar from "../../components/organism/Navbar";
import { CardsWrapper, FiltersWrapper, PageWrapper } from "./styles";
import { Card } from "primereact/card";
import { RecipesModal } from "../../components/organism/pre-modals";
import { useQuery } from "../../globals/hooks/use-query";
import { ReceitasViewModel, useReceipsService } from "../../api/services";
import { Skeleton } from "primereact/skeleton";

export const RecipeSearch: FC = () => {
  const { getAllReceitas } = useReceipsService();

  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState<ReceitasViewModel>();

  const { data, isLoading } = useQuery({
    query: async () => await getAllReceitas(),
  });

  return (
    <>
      <Navbar />
      <PageWrapper>
        <FiltersWrapper>
          <Filters />
        </FiltersWrapper>

        <CardsWrapper>
          {isLoading ? (
            <>
              {Array(24)
                .fill(0)
                .map((_, index) => (
                  <Skeleton
                    height="10rem"
                    className="m-2"
                    key={index}
                    width="14rem"
                  />
                ))}
            </>
          ) : (
            <>
              {data?.map((item, index) => (
                <Card
                  className="md:w-14rem m-2"
                  style={{ height: "104px", cursor: "pointer" }}
                  title={item.nome}
                  key={index}
                  onClick={() => {
                    setShowRecipe(true);
                    setRecipeSelected(item);
                  }}
                />
              ))}
            </>
          )}
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
