import { useEffect, useState } from "react";
import Navbar from "../../components/organism/Navbar";
import { ReceitaViewModel } from "../main-page/types";
import { ReceitaService } from "../../utils/data";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { RecipeApi } from "./types";
import axios from "axios";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<RecipeApi[]>([]);

  const searchRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples?apiKey=0198de02cb10419e98501bbe209a6848`
    );
    console.log(response);
    // const data = await response.json();
    // setRecipes(
    //   data.hits.map((hit: any) => ({
    //     title: hit.recipe.label,
    //     ingredients: hit.recipe.ingredientLines,
    //   }))
    // );
  };

  const [receitas, setReceitas] = useState<ReceitaViewModel[]>([]);

  useEffect(() => {
    setReceitas(ReceitaService.getReceitas());
  }, []);

  const secoes = receitas.map((x) => x.secao);

  const ingredientes = secoes.map(
    (x) => x.find((p) => p.nome === " Ingredientes") ?? []
  );

  const apiKey = "0198de02cb10419e98501bbe209a6848";

  interface Recipe {
    id: number;
    title: string;
    image: string;
    usedIngredients: any[];
    missedIngredients: any[];
    unusedIngredients: any[];
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [recipes2, setRecipes2] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipesByIngredients = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${searchQuery}`
        );
        const data = response.data.map((recipe: any) => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          usedIngredients: recipe.usedIngredients,
          missedIngredients: recipe.missedIngredients,
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
        <ul>
          {recipes2.map((recipe) => (
            <li key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h2>{recipe.title}</h2>
              <div>
                <h3>Used ingredients:</h3>
                <ul>
                  {recipe.usedIngredients.map((ingredient: any) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Missed ingredients:</h3>
                <ul>
                  {recipe.missedIngredients.map((ingredient: any) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Unused ingredients:</h3>
                <ul>
                  {recipe.unusedIngredients.map((ingredient: any) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
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
