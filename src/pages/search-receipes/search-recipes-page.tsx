import { FC, useState } from "react";
import Filters from "./filters/filter-ingredients";
import Navbar from "../../components/organism/Navbar";
import { CardsWrapper, FiltersWrapper, PageWrapper } from "./styles";
import { Card } from "primereact/card";
import { RecipesModal } from "../../components/organism/pre-modals";
import { useQuery } from "../../globals/hooks/use-query";
import { ReceitasViewModel, useReceipsService } from "../../api/services";
import { Skeleton } from "primereact/skeleton";
import { ProgressSpinner } from "primereact/progressspinner";
import { useEffectOnce, useIsConnected, useToast } from "../../globals/hooks";
import { useNavigate } from "react-router-dom";
import RecipeSearchInput from "../../components/molecules/search-input/search-input";

export const RecipeSearch: FC = () => {
  const { getAllReceitas } = useReceipsService();

  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState<ReceitasViewModel>();

  const { data, isLoading } = useQuery({
    query: async () => await getAllReceitas(),
  });

  const { connection } = useIsConnected();
  const navigate = useNavigate();
  const [conn, setConn] = useState(false);
  const { showWarning } = useToast();

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
          <div className="flex">
            <div className="col-12 flex justify-content-center mt-2">
              <RecipeSearchInput />
            </div>
          </div>
          <PageWrapper>
            <FiltersWrapper>
              <Filters />
            </FiltersWrapper>

            <div>
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
            </div>
          </PageWrapper>

          {showRecipe && (
            <RecipesModal
              recipes={recipeSelected}
              onHide={() => setShowRecipe(false)}
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
