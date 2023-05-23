import { FC } from "react";
import Filters from "./filters/filter-ingredients";
import Navbar from "../../components/organism/Navbar";
import { CardsWrapper, FiltersWrapper, PageWrapper } from "./styles";
import { ReceitasIMCViewModel } from "../../api/view-model/receitas-imc-view-model";
import receitasJson from "../../data/receitas.json";
import { Card } from "primereact/card";

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
            <Card title={itens.titulo} key={index} />
          ))}
        </CardsWrapper>
      </PageWrapper>
    </>
  );
};

export default RecipeSearch;
