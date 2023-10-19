import { FC, useState } from "react";
import {
  RemoveSearchButton,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./styles";
import { SearchInputProps } from "./types";
import { Icon } from "../../atmos/icon";
import { useReceipsService } from "../../../api/services";

const RecipeSearchInput: FC<SearchInputProps> = (props) => {
  const { setReceipesData, data } = props;
  const [searchValue, setSearchValue] = useState<string>("");
  const { getSearchReceips } = useReceipsService();

  const handleSearchInput = async () => {
    if (searchValue !== "") {
      const newData = await getSearchReceips(searchValue);
      setReceipesData(newData);
    } else {
      setReceipesData(data);
    }
  };

  const handleRemoveSearchInput = async () => {
    setSearchValue("");
    setReceipesData(data);
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
      {searchValue && (
        <RemoveSearchButton type="button" onClick={handleRemoveSearchInput}>
          <Icon name="close" size={25} />
        </RemoveSearchButton>
      )}
    </SearchContainer>
  );
};

export default RecipeSearchInput;
