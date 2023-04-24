import { FC } from "react";
import { BackgroundMain, Container } from "./styles";
import Navbar from "../../components/organism/Navbar";
import { CardIMC } from "./cards/imc-card";
import { ReceitasCard } from "./cards/receitas-card";
import { ReceitasFavoritasCard } from "./cards/receitas-favoritas-card";
import useNavigation from "../../utils/use-navigation";
import navigationData from "../../utils/navigation";

const MainPage: FC = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();

  return (
    <>
      <Container>
        <BackgroundMain>
          <Navbar
            currentRoute={currentRoute}
            navigationData={navigationData}
            setCurrentRoute={setCurrentRoute}
          />
          <div className="h-auto mt-7">
            <h1
              className="justify-content-center flex"
              style={{ color: "black" }}
            >
              Escolha uma opção:
            </h1>
            <div className="grid m-3 justify-content-center">
              <CardIMC />
              <ReceitasCard />
              <ReceitasFavoritasCard />
            </div>
          </div>
        </BackgroundMain>
      </Container>
    </>
  );
};

export default MainPage;
