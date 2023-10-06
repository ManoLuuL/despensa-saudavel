import { FC, useState } from "react";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { FiltersList, FiltersTitle, FiltersWrapper } from "./styles";
import { FiltersListProps } from "./types";
import { Divider } from "primereact/divider";
import {
  IngredientesViewModel,
  useReceipsService,
} from "../../../api/services";
import { useQuery } from "../../../globals/hooks/use-query";
import { Skeleton } from "primereact/skeleton";
import { Button } from "../../../components/molecules/button-custom";
import { ReceitaIngredienteDTO } from "../../../api/services/receips/dto";
import { useToast } from "../../../globals/hooks";
import { getRestricoes } from "./get-restricoes";

const Filters: FC<FiltersListProps> = ({ setReceipesData, setLoading }) => {
  const { getIngredientes, getReceitaIngrediente } = useReceipsService();
  const { showError } = useToast();

  const { data: filtro, isLoading } = useQuery({
    query: async () => await getIngredientes(),
  });

  const { dataRestricoes } = getRestricoes();

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [restricoes, setRestricoes] = useState<string[]>([]);
  const [ids, setIds] = useState<number[]>([]);

  const onIngredientsChange = (
    e: CheckboxChangeEvent,
    data: IngredientesViewModel
  ) => {
    let _ingredients = [...ingredients];
    let _ids = [...ids];

    if (e.checked) {
      _ingredients.push(e.value);
      _ids.push(data.id);
    } else {
      _ingredients.splice(_ingredients.indexOf(e.value), 1);
      _ids.splice(_ids.indexOf(data.id), 1);
    }

    setIngredients(_ingredients);
    setIds(_ids);
  };

  const onRestritChange = (e: CheckboxChangeEvent) => {
    let _restricoes = [...restricoes];

    if (e.checked) {
      _restricoes.push(e.value);
    } else {
      _restricoes.splice(_restricoes.indexOf(e.value), 1);
    }

    setRestricoes(_restricoes);
  };

  const handleFilterSubmit = async () => {
    setLoading(true);
    try {
      const newData: ReceitaIngredienteDTO = {
        ingredientes_ids: ids,
        restricoes: restricoes,
      };

      const newReceitas = await getReceitaIngrediente(newData);
      setReceipesData(newReceitas);
    } catch (e) {
      showError("Erro ao buscar receitas pelos filtros selecionados!");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <FiltersWrapper>
          <FiltersTitle>
            <Skeleton height="2rem" className="mb-2" width="12rem" />
          </FiltersTitle>

          {Array(8)
            .fill(0)
            .map((_, index) => (
              <Skeleton
                height="2rem"
                className="mb-2"
                key={index}
                width="18rem"
              />
            ))}
        </FiltersWrapper>
      ) : (
        <>
          <FiltersWrapper>
            <FiltersTitle>Ingredientes</FiltersTitle>
            <FiltersList>
              {filtro &&
                filtro.map((data, index) => (
                  <div key={index}>
                    <Checkbox
                      checked={ingredients.includes(data.descricao)}
                      onChange={(check) => onIngredientsChange(check, data)}
                      value={data.descricao}
                    />
                    <label className="m-1">
                      {data.descricao.toUpperCase()}
                    </label>
                  </div>
                ))}
            </FiltersList>

            <Divider />
            <FiltersTitle>Restrições</FiltersTitle>
            <FiltersList>
              {dataRestricoes &&
                dataRestricoes.map((data, index) => (
                  <div key={index}>
                    <Checkbox
                      checked={restricoes.includes(data.description)}
                      onChange={onRestritChange}
                      value={data.description}
                    />
                    <label className="m-1">
                      {data.description.toUpperCase()}
                    </label>
                  </div>
                ))}
            </FiltersList>
            <div className="flex justify-content-center mt-2">
              <Button
                text="Buscar"
                color="contrast"
                onClick={handleFilterSubmit}
              />
            </div>
          </FiltersWrapper>
        </>
      )}
    </>
  );
};

export default Filters;
