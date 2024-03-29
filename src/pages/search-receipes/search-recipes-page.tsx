import { CardsWrapper, PageWrapper } from "./styles";
import { FC, useState } from "react";
import { ReceitasViewModel, useReceipsService } from "../../api/services";
import { useEffectOnce, useIsConnected, useToast } from "../../globals/hooks";

import { Card } from "primereact/card";
import Filters from "./filters/filter-ingredients";
import { Navbar } from "../../components/organism";
import { ProgressSpinner } from "primereact/progressspinner";
import RecipeSearchInput from "../../components/molecules/search-input/search-input";
import { RecipesModal } from "../../components/organism/pre-modals";
import { Skeleton } from "primereact/skeleton";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../globals/hooks/use-query";

export const RecipeSearch: FC = () => {
  const { getAllReceitas } = useReceipsService();

  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState<ReceitasViewModel>();
  const [receipesData, setReceipesData] = useState<ReceitasViewModel[]>();

  const { data, isLoading } = useQuery({
    query: async () => await getAllReceitas(),
    onSuccess(data) {
      setReceipesData(data);
    },
  });

  const [loading, setLoading] = useState<boolean>(false);
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
              <RecipeSearchInput
                data={data ?? []}
                setReceipesData={setReceipesData}
              />
            </div>
          </div>
          <PageWrapper>
            <Filters
              setReceipesData={setReceipesData}
              setLoading={setLoading}
            />

            <div>
              <CardsWrapper>
                {isLoading || loading ? (
                  <>
                    {Array(36)
                      .fill(0)
                      .map((_, index) => (
                        <Skeleton
                          height="104px"
                          className="md:w-14rem m-2"
                          key={index}
                        />
                      ))}
                  </>
                ) : (
                  <>
                    {receipesData
                      ?.slice()
                      .sort((a, b) => a.nome.localeCompare(b.nome))
                      .map((item, index) => (
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
