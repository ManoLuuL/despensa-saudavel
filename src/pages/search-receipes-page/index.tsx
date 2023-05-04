import Navbar from "../../components/organism/Navbar";
import { Card } from "primereact/card";
import { Chips } from "primereact/chips";
import { useState } from "react";
import { BntSearch } from "./styles";

const RecipeSearch = () => {
  const [searchValue, setSearchValue] = useState<string[]>([]);

  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <div className="col-12 justify-content-center flex">
          <span className="p-float-label">
            <Chips
              id="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.value ?? [])}
            ></Chips>
            <label htmlFor="search">Ingredientes</label>
          </span>
          <BntSearch>Buscar </BntSearch>
        </div>
        <div className="grid justify-content-center">
          {Array(50)
            .fill(0)
            .map((_, index) => (
              <Card className=" md:w-18rem m-3 " title="Teste" key={index}>
                Teste de card
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

export default RecipeSearch;
