import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { FC, useState } from "react";
import {
  FilterContainer,
  FilterContent,
  FiltersList,
  FiltersTitle,
  FiltersWrapper,
} from "./styles";
import {
  IngredientesViewModel,
  useReceipsService,
} from "../../../api/services";
import { useRestrictions, useToast } from "../../../globals/hooks";

import { Button } from "../../../components/molecules/button-custom";
import { Divider } from "primereact/divider";
import { FiltersListProps } from "./types";
import { ReceitaIngredienteDTO } from "../../../api/services/receips/dto";
import { Skeleton } from "primereact/skeleton";
import { useQuery } from "../../../globals/hooks/use-query";

const Filters: FC<FiltersListProps> = ({ setReceipesData, setLoading }) => {
  const { getIngredients, getReceipIngredient } = useReceipsService();
  const { showError } = useToast();

  const { data: filtro, isLoading } = useQuery({
    query: async () => await getIngredients(),
  });

  const { dataRestricoes } = useRestrictions();

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [restrictions, setRestrictions] = useState<string[]>([]);
  const [ids, setIds] = useState<number[]>([]);

  const handleIngredientsChange = (
    e: CheckboxChangeEvent,
    data: IngredientesViewModel
  ) => {
    let newIngredients = [...ingredients];
    let newIds = [...ids];

    if (e.checked) {
      newIngredients.push(e.value);
      newIds.push(data.id);
    } else {
      newIngredients.splice(newIngredients.indexOf(e.value), 1);
      newIds.splice(newIds.indexOf(data.id), 1);
    }

    setIngredients(newIngredients);
    setIds(newIds);
  };

  const onRestritChange = (e: CheckboxChangeEvent) => {
    let newRestrictions = [...restrictions];

    if (e.checked) {
      newRestrictions.push(e.value);
    } else {
      newRestrictions.splice(newRestrictions.indexOf(e.value), 1);
    }

    setRestrictions(newRestrictions);
  };

  const handleFilterSubmit = async () => {
    setLoading(true);
    try {
      const newData: ReceitaIngredienteDTO = {
        ingredientes_ids: ids,
        restrictions: restrictions,
      };

      const newReceitas = await getReceipIngredient(newData);
      setReceipesData(newReceitas);
    } catch (e) {
      showError("Erro ao buscar receitas pelos filtros selecionados!");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleClearFilter = async () => {
    setIngredients([]);
    setIds([]);
    setRestrictions([]);
    setLoading(true);
    try {
      const newData: ReceitaIngredienteDTO = {
        ingredientes_ids: [],
        restrictions: [],
      };

      const newReceitas = await getReceipIngredient(newData);
      setReceipesData(newReceitas);
    } catch (e) {
      showError("Erro ao buscar receitas pelos filtros selecionados!");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FilterContainer>
      <FiltersWrapper>
        {isLoading ? (
          <FilterContent>
            <FiltersTitle>
              <Skeleton height="2rem" className="mb-2" width="14rem" />
            </FiltersTitle>

            {Array(20)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  height="2rem"
                  className="mb-2"
                  key={index}
                  width="14rem"
                />
              ))}
          </FilterContent>
        ) : (
          <>
            <FilterContent>
              <FiltersTitle>Ingredientes</FiltersTitle>
              <FiltersList>
                {filtro &&
                  filtro
                    .slice()
                    .sort((a, b) => a.descricao.localeCompare(b.descricao))
                    .map((data, index) => (
                      <div key={index} className="mb-1">
                        <Checkbox
                          checked={ingredients.includes(data.descricao)}
                          onChange={(check) =>
                            handleIngredientsChange(check, data)
                          }
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
                  dataRestricoes
                    .slice()
                    .sort((a, b) => a.description.localeCompare(b.description))
                    .map((data, index) => (
                      <div key={index} className="mb-1">
                        <Checkbox
                          checked={restrictions.includes(data.description)}
                          onChange={onRestritChange}
                          value={data.description}
                        />
                        <label className="m-1">
                          {data.description.toUpperCase()}
                        </label>
                      </div>
                    ))}
              </FiltersList>
              <Divider />
            </FilterContent>
          </>
        )}
      </FiltersWrapper>
      <div className="flex justify-content-center mt-3 gap-2">
        <Button
          text="Limpar Filtros"
          color="danger"
          onClick={handleClearFilter}
          disabled={isLoading}
        />
        <Button
          text="Buscar"
          color="contrast"
          onClick={handleFilterSubmit}
          disabled={isLoading}
        />
      </div>
    </FilterContainer>
  );
};

export default Filters;
