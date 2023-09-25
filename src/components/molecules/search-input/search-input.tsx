import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  SearchContainer,
  SearchInput,
  SearchResultItem,
  SearchResults,
} from "./styles";

const RecipeSearchInput: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    const searchEndpoint = `https://seuservidor.com/api/search?q=${searchValue}`;

    if (searchValue.trim() !== "") {
      fetch(searchEndpoint)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados:", error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Buscar receita"
      />
      <SearchResults>
        {searchResults.map((result, index) => (
          <SearchResultItem key={index}>{result}</SearchResultItem>
        ))}
      </SearchResults>
    </SearchContainer>
  );
};

export default RecipeSearchInput;
