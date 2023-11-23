import {
  Buttons,
  ContainerGlobalHome,
  ContainerHome,
  ContainerImg,
  Description,
  Overlay,
  TitlePage,
} from "./styles";

import { Button } from "../../components/molecules/button";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import imgHome from "./assets/image.png";
import imgLogo from "./assets/logo_facul.png";

export const MainPage: FC = () => {
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
            <NavLink to={"/Login"} style={{ textDecoration: "none" }}>
              <Button content="Login" />
            </NavLink>
            <NavLink to={"/Registrar"} style={{ textDecoration: "none" }}>
              <Button content="Cadastrar-se" />
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
