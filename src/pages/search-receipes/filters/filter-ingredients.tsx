import { ChangeEvent, FC, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { FiltersList, FiltersTitle, FiltersWrapper } from "./styles";
import { Button } from "../../../components/molecules/button-custom";
import { FiltersListProps } from "./types";
import { Divider } from "primereact/divider";
import { getRestricoes } from "./get-restricoes";
import { useEffectOnce } from "../../../globals/hooks";
import {
  IngredientesViewModel,
  useReceipsService,
} from "../../../api/services";

const Filters: FC<FiltersListProps> = () => {
  const [data, setData] = useState<IngredientesViewModel[]>([]);

  const { getIngredientes } = useReceipsService();

  useEffectOnce(() => {
    (async () => {
      const ingred = await getIngredientes();
      setData(ingred);
    })();
  });

  const [currentFilter, setCurrentFilter] = useState<string>("");

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentFilter(event.target.value);
  };

  const restricoes = getRestricoes();

  return (
    <FiltersWrapper>
      <FiltersTitle>Ingredientes</FiltersTitle>
      <div className="grid gap-2">
        <InputText
          value={currentFilter}
          onChange={handleFilterChange}
          className="col-9 "
        />
        <Button
          className="col-3"
          icon={{
            name: "add",
          }}
        />
      </div>
      <FiltersList>
        {data.map((data, index) => (
          <div key={index}>
            <Checkbox
              checked
              value={data.descricao}
              onChange={() => {}}
              disabled={true}
            />
            <label className="m-1">{data.descricao.toUpperCase()}</label>
          </div>
        ))}
      </FiltersList>

      <Divider />
      <FiltersTitle>Restrições</FiltersTitle>
      <FiltersList>
        {restricoes.map((itens) => (
          <div key={itens.id} className="mb-1">
            <Checkbox
              checked={false}
              value={itens.description}
              onChange={() => {}}
              disabled={true}
            />
            <label className="m-1">{itens.description.toUpperCase()}</label>
          </div>
        ))}
      </FiltersList>
    </FiltersWrapper>
  );
};

export default Filters;
