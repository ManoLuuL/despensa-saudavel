import { Divider } from "primereact/divider";
import { Container } from "../../components/atmos/container";
import Navbar from "../../components/organism/Navbar";
import { Card } from "primereact/card";
import { useEffectOnce, useIsConnected, useToast } from "../../globals/hooks";
import { useNavigate } from "react-router-dom";
import { FC, useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { ReceitasViewModel, useReceipsService } from "../../api/services";
import { useQuery } from "../../globals/hooks/use-query";
import { RecipesModal } from "../../components/organism/pre-modals";
import { Skeleton } from "primereact/skeleton";

export const FavoriteRecipe: FC = () => {
  const { connection } = useIsConnected();
  const navigate = useNavigate();
  const [conn, setConn] = useState(false);
  const { showWarning } = useToast();
  const { getAllFavoriteReceitas } = useReceipsService();

  useEffectOnce(() => {
    if (connection === undefined) {
      navigate("/login");
      showWarning(
        "Usuario não identificado, por favor faça o login novamente!"
      );
    } else setConn(true);
  });
  const { data, isLoading } = useQuery({
    query: async () => await getAllFavoriteReceitas(connection.data.id),
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
