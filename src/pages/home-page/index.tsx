import { FC } from "react";
import { ContainerHome } from "./styles";

const HomePage: FC = () => {
  return (
    <ContainerHome>
      <div className="home-page">
        <div className="overlay">
          <h1>Website de Cardápio Nutricional</h1>
          <p>
            Uma ferramenta online para uma vida mais saudável e equilibrada.
          </p>
          <div className="buttons">
            <button>Login</button>
            <button>Registrar-se</button>
          </div>
        </div>
      </div>
    </ContainerHome>
  );
};

export default HomePage;
