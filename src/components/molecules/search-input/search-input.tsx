import { FC, useState } from "react";
import { SearchButton, SearchContainer, SearchInput } from "./styles";
import { SearchInputProps } from "./types";
import { Icon } from "../../atmos/icon";
import { useReceipsService } from "../../../api/services";

const RecipeSearchInput: FC<SearchInputProps> = (props) => {
  const { setReceipesData, data } = props;
  const [searchValue, setSearchValue] = useState<string>("");
  const { getSearchReceitas } = useReceipsService();

  const handleSearchInput = async () => {
    if (searchValue !== "") {
      const newData = await getSearchReceitas(searchValue);
      setReceipesData(newData);
    } else {
      setReceipesData(data);
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchValue}
        onChange={(value) => {
          setSearchValue(value.target.value);
        }}
        placeholder="Buscar receita"
      />
      <SearchButton type="button" onClick={handleSearchInput}>
        <Icon name="search" size={25} />
      </SearchButton>
    </SearchContainer>
  );
};

export default RecipeSearchInput;
