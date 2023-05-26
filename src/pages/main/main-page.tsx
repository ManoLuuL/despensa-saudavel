import { FC } from "react";
import { BackgroundMain, CardsContainer, Container } from "./styles";
import Navbar from "../../components/organism/Navbar";
import { CardIMC } from "./cards/imc-card";
import { ReceitasCard } from "./cards/receitas-card";
import { ReceitasFavoritasCard } from "./cards/receitas-favoritas-card";

export const MainPage: FC = () => {
  return (
    <>
      <Container>
        <BackgroundMain>
          <Navbar />
          <CardsContainer>
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
          </CardsContainer>
        </BackgroundMain>
      </Container>
    </>
  );
};
