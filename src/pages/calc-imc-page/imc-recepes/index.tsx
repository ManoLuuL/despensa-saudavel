import { FC } from "react";
import { ReceitasIMCProps } from "./types";
import { Card } from "primereact/card";
import { Title, ReceitasWrapper } from "./styles";

export const ReceitasIMC: FC<ReceitasIMCProps> = (props) => {
  const { content } = props;

  return (
    <ReceitasWrapper>
      <Title>Receitas do dia</Title>
      {content.receitas.map((itens) => (
        <div key={itens.titulo} className="col-12 ">
          <Card
            header={
              <>
                <img
                  src={itens.imagem}
                  alt=""
                  style={{ height: "90px", width: "190px" }}
                />
              </>
            }
            title={itens.titulo}
          />
        </div>
      ))}
    </ReceitasWrapper>
  );
};
