import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";

const FiltersWrapper = styled.div`
  width: 200px;
  height: 100%;
  padding: 16px;
`;

const FiltersTitle = styled.h2`
  margin-bottom: 16px;
`;

const FiltersList = styled.div`
  margin-top: 16px;
`;

const Filters: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
