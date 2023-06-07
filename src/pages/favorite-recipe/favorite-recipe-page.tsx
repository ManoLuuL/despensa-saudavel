import { Divider } from "primereact/divider";
import { Container } from "../../components/atmos/container";
import Navbar from "../../components/organism/Navbar";
import { ReceitasIMCViewModel } from "../../api/view-model/receitas-imc-view-model";
import recipesRecomend from "../../data/search-recipes.json";
import { Card } from "primereact/card";

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

  return (
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
                    // onClick={() => {
                    //   setShowRecipesModal(true);
                    //   setRecipeSelected(itens);
                    // }}
                  />
                </div>
              ))}
            </div>
          </>
        }
      />
    </>
  );
};
