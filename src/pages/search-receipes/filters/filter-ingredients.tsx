import { ChangeEvent, FC, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { FiltersList, FiltersTitle, FiltersWrapper } from "./styles";
import { Button } from "../../../components/molecules/button-custom";

const Filters: FC = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>("");

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentFilter(event.target.value);
  };

  const handleAddFilter = () => {
    if (currentFilter && !filters.includes(currentFilter)) {
      setFilters([...filters, currentFilter]);
      setCurrentFilter("");
    }
  };

  const handleRemoveFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter));
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
            <Checkbox checked value={filter} onChange={() => {}} />
            <label className="m-1">{filter.toUpperCase()}</label>
            <button onClick={() => handleRemoveFilter(filter)}>Remove</button>
          </div>
        ))}
      </FiltersList>
    </FiltersWrapper>
  );
};

export default Filters;
