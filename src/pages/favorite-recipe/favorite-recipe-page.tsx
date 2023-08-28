import { Divider } from "primereact/divider";
import { Container } from "../../components/atmos/container";
import Navbar from "../../components/organism/Navbar";
import { ReceitasIMCViewModel } from "../../api/view-model/receitas-imc-view-model";
import recipesRecomend from "../../data/search-recipes.json";
import { Card } from "primereact/card";
import { useEffectOnce, useIsConnected, useToast } from "../../globals/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";

export const FavoriteRecipe = () => {
  const amount = 6;

  // Função para selecionar dados aleatórios
  const getRandomData = () => {
    const randomData: ReceitasIMCViewModel = { receitas: [] };
    const jsonLength = recipesRecomend.receitas.length;

    while (randomData.receitas.length < amount) {
      const randomIndex = Math.floor(Math.random() * jsonLength);
      const randomItem = recipesRecomend.receitas[randomIndex];

      if (!randomData.receitas.includes(randomItem)) {
        randomData.receitas.push(randomItem);
      }
    }

    return randomData;
  };

  const randomData = getRandomData();

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
          <Container
            content={
              <>
                <h3 className="flex justify-content-center">
                  Receitas favoritadas
                </h3>
                <Divider />
                <div className="grid">
                  {randomData.receitas.map((itens) => (
                    <div key={itens.titulo} className="col-4">
                      <Card
                        title={itens.titulo}
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </>
            }
          />
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
