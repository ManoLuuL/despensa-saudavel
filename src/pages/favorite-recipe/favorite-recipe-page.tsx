import { FC, useState } from "react";
import { ReceitasViewModel, useReceipsService } from "../../api/services";
import { useEffectOnce, useIsConnected, useToast } from "../../globals/hooks";

import { Card } from "primereact/card";
import { Container } from "../../components/atmos/container";
import { Divider } from "primereact/divider";
import { Navbar } from "../../components/organism";
import { ProgressSpinner } from "primereact/progressspinner";
import { RecipesModal } from "../../components/organism/pre-modals";
import { Skeleton } from "primereact/skeleton";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../globals/hooks/use-query";

export const FavoriteRecipe: FC = () => {
  const { connection } = useIsConnected();
  const navigate = useNavigate();
  const [conn, setConn] = useState(false);
  const { showWarning } = useToast();
  const { getAllFavoriteReceips } = useReceipsService();

  useEffectOnce(() => {
    if (connection === undefined) {
      navigate("/login");
      showWarning(
        "Usuario não identificado, por favor faça o login novamente!"
      );
    } else setConn(true);
  });
  const { data, isLoading } = useQuery({
    query: async () => await getAllFavoriteReceips(connection.id),
  });

  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState<ReceitasViewModel>();

  return (
    <>
      {conn ? (
        <>
          <Navbar />
          <Container
            content={
              <>
                <h3 className="flex justify-content-center">
                  Receitas favoritadas
                </h3>
                <Divider />
                <div className="grid align-items-center flex justify-content-center">
                  {isLoading ? (
                    <>
                      {Array(20)
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
                      {data
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
                </div>
              </>
            }
          />

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
