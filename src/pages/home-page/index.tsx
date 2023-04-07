import { FC, useEffect, useState } from "react";
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
import { Button } from "../../components/molecules/button";
import { DataView } from "primereact/dataview";
import { ReceitaService } from "../../utils/data";

type teste = {
  _id: {
    $oid: string;
  };
  nome: string;
  secao: {
    nome: string;
    conteudo: string[];
  }[];
};

const HomePage: FC = () => {
  const [receitas, setReceitas] = useState<teste[]>([]);

  useEffect(() => {
    setReceitas(ReceitaService.getReceitas());
  }, []);

  const itemTemplate = (product: teste) => {
    return <div className="col-12">{product.nome}</div>;
  };

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
              <Button content="Login" />
            </NavLink>
            <NavLink to={"/Registrar"}>
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
      <DataView value={receitas} itemTemplate={itemTemplate} />
    </ContainerGlobalHome>
  );
};

export default HomePage;
