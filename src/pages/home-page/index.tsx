import { FC } from "react";
import { NavLink } from "react-router-dom";
import {
  Buttons,
  ContainerGlobalHome,
  ContainerHome,
  ContainerImg,
  Description,
  Overlay,
  TitlePage,
} from "./styles";
import imgLogo from "./assets/logo_facul.png";
import imgHome from "./assets/image.png";

const HomePage: FC = () => {
  return (
    <ContainerGlobalHome>
      <ContainerHome>
        <Overlay>
          <img
            src={imgLogo}
            alt=""
            style={{
              height: "5.5rem",
            }}
          />
          <div>
            <TitlePage>Despensa </TitlePage>
            <TitlePage>Saudável</TitlePage>
          </div>
          <Description>
            Aqui você pode criar refeições saudáveis com base no que já tem em
            casa. Esqueça a necessidade de ir às compras toda vez que quiser
            fazer uma refeição saudável. Nossa plataforma é fácil de usar e
            oferece opções deliciosas e nutritivas para todas as refeições do
            dia.
          </Description>
          <Buttons>
            <NavLink to={"/Login"}>
              <button className="button">Login</button>
            </NavLink>
            <NavLink to={"/Registrar"}>
              <button className="button">Registrar-se</button>
            </NavLink>
          </Buttons>
        </Overlay>
        <ContainerImg>
          <img
            src={imgHome}
            alt=""
            style={{
              height: "50rem",
            }}
          />
        </ContainerImg>
      </ContainerHome>
    </ContainerGlobalHome>
  );
};

export default HomePage;
