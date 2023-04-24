import Navbar from "../../components/organism/Navbar";
import { Card } from "primereact/card";

const RecipeSearch = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="grid justify-content-center">
          {Array(5)
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
