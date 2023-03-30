import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ContainerHome } from "./styles";
import imgLogo from "./assets/logo_facul.png";
import imgHome from "./assets/image.png";

const HomePage: FC = () => {
  return (
    <ContainerHome>
      <div className="home-page">
        <div className="containerHome">
          <div className="overlay">
            <img
              src={imgLogo}
              alt=""
              style={{
                height: "5.5rem",
              }}
            />
            <div>
              <h1 className="h1_homepage">Despensa </h1>
              <h1 className="h1_homepage">Saudável</h1>
            </div>
            <span className="description">
              Aqui você pode criar refeições saudáveis com base no que já tem em
              casa. Esqueça a necessidade de ir às compras toda vez que quiser
              fazer uma refeição saudável. Nossa plataforma é fácil de usar e
              oferece opções deliciosas e nutritivas para todas as refeições do
              dia.
            </span>
            <div className="buttons">
              <NavLink to={"/Login"}>
                <button className="button">Login</button>
              </NavLink>
              <NavLink to={"/Registrar"}>
                <button className="button">Registrar-se</button>
              </NavLink>
            </div>
          </div>
          <div className="rightImg">
            <img
              src={imgHome}
              alt=""
              style={{
                height: "50rem",
              }}
            />
          </div>
        </div>
      </div>
    </ContainerHome>
  );
};

export default HomePage;
