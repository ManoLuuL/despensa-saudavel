import { FC } from "react";
import { Container } from "./styles";
import Navbar from "../../components/organism/Navbar";
import { CardIMC } from "./cards/imc-card";
import { ReceitasCard } from "./cards/receitas-card";
import { ReceitasFavoritasCard } from "./cards/receitas-favoritas-card";

const MainPage: FC = () => {
  return (
    <Container>
      <Navbar />

      <div>
        <h1 className="justify-content-center flex">Escolha uma opção:</h1>
        <div className="grid m-3 justify-content-center">
          <CardIMC />
          <ReceitasCard />
          <ReceitasFavoritasCard />
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
