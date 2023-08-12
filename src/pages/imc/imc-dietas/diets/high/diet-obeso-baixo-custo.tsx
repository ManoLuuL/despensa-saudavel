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
      <p>1 porção de aveia cozida com água ou leite desnatado.</p>
      <p>1 banana ou outra fruta da estação.</p>
      <p>1 fatia de pão integral.</p>
      <Divider />
      <h3>Lanche da manhã</h3>
      <p>
        Essa refeição é opcional, mas se você estiver sentindo fome entre o café
        da manhã e o almoço, vale começar a praticá-la. A ideia é que o lanche
        seja leve e prático, pois, geralmente não é feito em casa.
      </p>
      <p>1 iogurte natural desnatado.</p>
      <p>1 pequena porção de cenoura ou pepino.</p>
      <Divider />
      <h3>Almoço</h3>
      <p>
        Para repor as energias, vem o almoço. Os brasileiros tem receio de que
        na dieta para emagrecer o arroz e feijão sejam excluídos, mas essa
        combinação pode continuar sendo consumida até porque é uma tradição,
        rende na hora de preparar e não pesa tanto no bolso.
      </p>
      <p>1 porção de arroz integral ou massa integral.</p>
      <p>1 porção de feijão ou lentilhas.</p>
      <p>Vegetais cozidos ou salada.</p>
      <Divider />
      <h3>Lanche da tarde</h3>
      <p>
        Entre o almoço e o jantar, pode ser que dê aquela sensação do estômago
        roncar. Por isso, assim como no lanche da manhã, é importante escolher
        alimentos que saciam, como àqueles com fibras ou proteínas.
      </p>
      <p>1 maçã ou outra fruta.</p>
      <p>
        Algumas castanhas ou amêndoas (quantidade moderada devido ao custo).
      </p>
      <Divider />
      <h3>Jantar</h3>
      <p>
        Geralmente essa é a última refeição do dia e precisa ser nutritiva para
        aguentar até o dia seguinte, mas sem pesar no estômago. Aqui vale a
        mesma orientação do almoço, porém, com menores quantidades de
        carboidratos.
      </p>
      <p>1 filé de frango grelhado ou peixe.</p>
      <p>Vegetais cozidos ou salada.</p>
      <Divider />

      <h3>Pode ser utilizado as seguintes receitas:</h3>
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
