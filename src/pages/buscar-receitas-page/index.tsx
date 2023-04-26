import Navbar from "../../components/organism/Navbar";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";

const RecipeSearch = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="col-12 justify-content-center flex">
          <span className="p-float-label">
            <InputText id="search" />
            <label htmlFor="search">Buscar</label>
          </span>
        </div>
        <div className="grid justify-content-center">
          {Array(50)
            .fill(0)
            .map((_, index) => (
              <Card className=" md:w-20rem m-3 " title="Teste" key={index}>
                Teste de card
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

export default RecipeSearch;
