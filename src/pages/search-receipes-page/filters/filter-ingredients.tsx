import { ChangeEvent, FC, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { FiltersList, FiltersTitle, FiltersWrapper } from "./styles";

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
      <FiltersTitle>Filters</FiltersTitle>
      <div>
        <InputText value={currentFilter} onChange={handleFilterChange} />
        <button onClick={handleAddFilter}>Add</button>
      </div>
      <FiltersList>
        {filters.map((filter) => (
          <div key={filter}>
            <Checkbox checked value={filter} onChange={() => {}} />
            <label>{filter}</label>
            <button onClick={() => handleRemoveFilter(filter)}>Remove</button>
          </div>
        ))}
      </FiltersList>
    </FiltersWrapper>
  );
};

export default Filters;
