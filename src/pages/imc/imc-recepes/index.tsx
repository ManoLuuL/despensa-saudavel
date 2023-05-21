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
        <div key={itens.titulo} className="col-12">
          <Card
            title={itens.titulo}
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      ))}
    </ReceitasWrapper>
  );
};
