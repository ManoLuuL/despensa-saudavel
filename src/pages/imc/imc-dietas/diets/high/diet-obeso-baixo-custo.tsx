import { Divider } from "primereact/divider";
import { FC, useState } from "react";
import {
  Receitas,
  ReceitasIMCViewModel,
} from "../../../../../api/view-model/receitas-imc-view-model";
import recipesRecomend from "../../../../../data/search-recipes.json";
import { Card } from "primereact/card";
import { RecipesModal } from "../../../../../components/organism/pre-modals";

export const DietaObesoBaixoCusto: FC = () => {
  const [showRecipesModal, setShowRecipesModal] = useState(false);
  const [recipeSelected, setRecipeSelected] = useState<Receitas>();

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
      <h3>Café da Manhã</h3>
      <p>
        Dê preferência aos integrais, adicione fibras como chia e linhaça à
        tapioca, adoce bolos caseiros com frutas secas ou frescas ao invés de
        açúcar, consuma fontes de proteína como queijos, iogurtes e ovos, além
        das frutas em vitaminas, com granola (preferencialmente sem açúcar ou
        adoçada com mel) ou simplesmente a fruta com casca.
      </p>
      <p>
        Café ou chá sem adoçantes podem acompanhar (os adoçantes não são
        calóricos, mas estudos apresentam resultados relevantes de seu uso sobre
        piora de algumas condições de saúde, por isso, o ideal é evitar ou
        consumir em quantidades mínimas).
      </p>
      <Divider />
      <h3>Lanche da manhã</h3>
      <p>
        Essa refeição é opcional, mas se você estiver sentindo fome entre o café
        da manhã e o almoço, vale começar a praticá-la. A ideia é que o lanche
        seja leve e prático, pois, geralmente não é feito em casa.
      </p>
      <Divider />
      <h3>Almoço</h3>
      <p>
        Para repor as energias, vem o almoço. Os brasileiros tem receio de que
        na dieta para emagrecer o arroz e feijão sejam excluídos, mas essa
        combinação pode continuar sendo consumida até porque é uma tradição,
        rende na hora de preparar e não pesa tanto no bolso. Siga esse passo a
        passo para montar um prato colorido e equilibrado: Salada de folhas:
        pode ficar à vontade na hora de servir folhas como alface, agrião,
        rúcula, chicória, couve, escarola, entre outros. Legumes: podem ser
        servidos cozidos ou crus, o importante é variar no prato, com 2 a 3
        tipos (principalmente os verdes). Algumas sugestões incluem vagem,
        abobrinha, brócolis, chuchu, couve-flor e berinjela. Carboidratos: como
        arroz, batata-doce ou mandioca, com moderação. Leguminosas: são as
        principais fontes de proteína para os vegetarianos, mas servem para
        todas as pessoas. É possível variar os tipos de feijão ou trocar por
        lentilha, ervilhas ou grão-de-bico e o ideal é prepará-los sem adição de
        carnes gordurosas como linguiça calabresa ou bacon. Proteínas: devem ser
        preferencialmente menos gordurosas, como peito de frango, coxão duro,
        patinho, ovos e filé de pescada. Também é indicado fazer preparos sem
        adição de grandes quantidades de óleo como cozidos, refogados ou
        grelhados. Evite também o consumo de carnes vermelhas em excesso, no
        máximo duas vezes por semana. Por fim, o ideal é não ingerir líquidos
        durante as refeições porque interferem na absorção dos nutrientes e
        podem causar desconfortos gástricos, como o refluxo.
      </p>
      <Divider />
      <h3>Lanche da tarde</h3>
      <p>
        Entre o almoço e o jantar, pode ser que dê aquela sensação do estômago
        roncar. Por isso, assim como no lanche da manhã, é importante escolher
        alimentos que saciam, como àqueles com fibras ou proteínas.
      </p>
      <Divider />
      <h3>Jantar</h3>
      <p>
        Geralmente essa é a última refeição do dia e precisa ser nutritiva para
        aguentar até o dia seguinte, mas sem pesar no estômago. Aqui vale a
        mesma orientação do almoço, porém, com menores quantidades de
        carboidratos.
      </p>
      <Divider />

      <h3>Receitas:</h3>
      <div className="grid">
        {randomData.receitas.map((itens) => (
          <div key={itens.titulo} className="col-4">
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
      </div>

      {showRecipesModal && (
        <RecipesModal
          onHide={() => setShowRecipesModal(false)}
          recipes={recipeSelected}
        />
      )}
    </>
  );
};
