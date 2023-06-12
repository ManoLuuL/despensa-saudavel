import { ChangeEvent, FC, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { FiltersList, FiltersTitle, FiltersWrapper } from "./styles";
import { Button } from "../../../components/molecules/button-custom";
import { FiltersListProps } from "./types";
import newReceitas from "../../../data/search-recipes.json";
import { Receitas } from "../../../api/view-model/receitas-imc-view-model";

const Filters: FC<FiltersListProps> = (props) => {
  const { setNewReceips } = props;
  const [filters, setFilters] = useState<string[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>("");

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentFilter(event.target.value);
  };

  const handleAddFilter = () => {
    if (currentFilter && !filters.includes(currentFilter)) {
      setFilters([...filters, currentFilter]);
      setCurrentFilter("");
      const newValues = buscaObjetos(currentFilter, newReceitas.receitas);
      setNewReceips(newValues);
    }
  };

  const handleRemoveFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
    setNewReceips(newReceitas.receitas);
  };

  const buscaObjetos = (ingrediente: string, objetos: Receitas[]) => {
    return objetos.filter((objeto) =>
      Object.values(objeto).some((value) =>
        value.toString().toLowerCase().includes(ingrediente.toLowerCase())
      )
    );
  };

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
          onClick={handleAddFilter}
        />
      </div>
      <FiltersList>
        {filters.map((filter) => (
          <div key={filter}>
            <Checkbox
              checked
              value={filter}
              onChange={() => {}}
              disabled={true}
            />
            <label className="m-1">{filter.toUpperCase()}</label>
            <button onClick={() => handleRemoveFilter(filter)}>Remove</button>
          </div>
        ))}
      </FiltersList>
    </FiltersWrapper>
  );
};

export default Filters;
