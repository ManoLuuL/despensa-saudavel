import { useEffect, useState } from "react";
import {
  SearchContainer,
  SearchInput,
  SearchResultItem,
  SearchResults,
} from "./styles";

const RecipeSearchInput: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    // Simulação de um endpoint de busca
    const searchEndpoint = `https://seuservidor.com/api/search?q=${searchValue}`;

    // Verificando se o valor de pesquisa não está vazio
    if (searchValue.trim() !== "") {
      // Realizando a solicitação de busca
      fetch(searchEndpoint)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results); // Supondo que os resultados estejam em um array chamado "results"
        })
        .catch((error) => {
          console.error("Erro ao buscar dados:", error);
        });
    } else {
      setSearchResults([]); // Limpa os resultados se o campo de pesquisa estiver vazio
    }
  }, [searchValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Digite sua pesquisa de receita aqui"
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
