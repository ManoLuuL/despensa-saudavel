import { FC } from "react";
import Card from "./cards/cards-receips";
import Filters from "./filters/filter-ingredients";
import Navbar from "../../components/organism/Navbar";
import { CardsWrapper, FiltersWrapper, PageWrapper } from "./styles";
import { ReceitasIMCViewModel } from "../../api/view-model/receitas-imc-view-model";
import receitasJson from "../../data/receitas.json";

const RecipeSearch: FC = () => {
  const data: ReceitasIMCViewModel = receitasJson;

  return (
    <>
      <Navbar />
      <PageWrapper>
        <FiltersWrapper>
          <Filters />
        </FiltersWrapper>
        <CardsWrapper>
          {data.receitas.map((itens, index) => (
            <Card title={itens.titulo} key={index} description="" />
          ))}
          {Array(50)
            .fill(0)
            .map((_, index) => (
              <Card title="Teste" key={index} description="Teste de card" />
            ))}
        </CardsWrapper>
      </PageWrapper>
    </>
  );
};

export default RecipeSearch;
