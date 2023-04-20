import { useEffect, useState } from "react";
import Navbar from "../../components/organism/Navbar";
import { ReceitaViewModel } from "../main-page/types";
import { ReceitaService } from "../../utils/data";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { Card } from "primereact/card";
import { RecipeApi } from "./types";
import { API_KEY } from "../../utils/api-key";

const RecipeSearch = () => {
  const [receitas, setReceitas] = useState<ReceitaViewModel[]>([]);

  useEffect(() => {
    setReceitas(ReceitaService.getReceitas());
  }, []);

  const secoes = receitas.map((x) => x.secao);

  const ingredientes = secoes.map(
    (x) => x.find((p) => p.nome === " Ingredientes") ?? []
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [recipes2, setRecipes2] = useState<RecipeApi[]>([]);

  useEffect(() => {
    const fetchRecipesByIngredients = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${searchQuery}&number=100`
        );
        const data = response.data.map((recipe: RecipeApi) => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          usedIngredients: recipe.usedIngredients,
          unusedIngredients: recipe.unusedIngredients,
        }));
        setRecipes2(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchQuery !== "") {
      fetchRecipesByIngredients();
    }
  }, [searchQuery]);

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Recipes by Ingredients</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <div className="grid">
          {recipes2.map((recipe) => (
            <Card
              className="col-4 md:w-25rem m-3"
              title={recipe.title}
              key={recipe.id}
              header={
                <>
                  <img alt="Card" src={recipe.image} />
                </>
              }
            >
              {recipe.usedIngredients.map((x) => x.name)}
            </Card>
          ))}
        </div>
      </div>

      <h2>Receitas disponiveis:</h2>
      <div className="p-3">
        <DataTable
          value={receitas}
          paginator
          showGridlines
          rows={10}
          rowsPerPageOptions={[10, 25, 50, 100]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="_id.$oid"
            header="Id"
            style={{ width: "25%" }}
          ></Column>
          <Column field="nome" header="Nome" style={{ width: "25%" }}></Column>
        </DataTable>
        <div className="mt-5">
          <DataTable
            value={ingredientes}
            paginator
            showGridlines
            rows={10}
            rowsPerPageOptions={[10, 25, 50, 100]}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              field="nome"
              header="Nome"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="conteudo"
              header="Conteudo"
              style={{ width: "25%" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default RecipeSearch;
