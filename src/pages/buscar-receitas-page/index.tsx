import { useEffect, useState } from "react";
import Navbar from "../../components/organism/Navbar";
import { ReceitaViewModel } from "../main-page/types";
import { ReceitaService } from "../../utils/data";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Recipe {
  title: string;
  ingredients: string[];
}

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const searchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id={APP_ID}&app_key={APP_KEY}`
    );
    const data = await response.json();
    setRecipes(
      data.hits.map((hit: any) => ({
        title: hit.recipe.label,
        ingredients: hit.recipe.ingredientLines,
      }))
    );
  };

  const [receitas, setReceitas] = useState<ReceitaViewModel[]>([]);

  useEffect(() => {
    setReceitas(ReceitaService.getReceitas());
  }, []);

  const secoes = receitas.map((x) => x.secao);

  const ingredientes = secoes.map(
    (x) => x.find((p) => p.nome === " Ingredientes") ?? []
  );

  return (
    <>
      <Navbar />
      <div>
        <h2>Buscar Receitas</h2>
        <label htmlFor="query">Busque por ingredientes: </label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <br />
        <button onClick={searchRecipes}>Buscar</button>
        <br />
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h3>{recipe.title}</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
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
