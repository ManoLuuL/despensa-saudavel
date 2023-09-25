import { FC, useState } from "react";
import { SearchContainer, SearchInput } from "./styles";
import { SearchInputProps } from "./types";

const RecipeSearchInput: FC<SearchInputProps> = (props) => {
  const { onChange } = props;
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchValue}
        onChange={(value) => {
          onChange(value);
          setSearchValue(value.target.value);
        }}
        placeholder="Buscar receita"
      />
    </SearchContainer>
  );
};

export default RecipeSearchInput;
