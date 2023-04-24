import Navbar from "../../components/organism/Navbar";
import { Card } from "primereact/card";
import useNavigation from "../../utils/use-navigation";
import navigationData from "../../utils/navigation";

const RecipeSearch = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();
  return (
    <>
      <Navbar
        currentRoute={currentRoute}
        navigationData={navigationData}
        setCurrentRoute={setCurrentRoute}
      />
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
