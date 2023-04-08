import { FC, useEffect, useState } from "react";
import { Container } from "./styles";
import { ReceitaViewModel } from "./types";
import { ReceitaService } from "../../utils/data";
import { DataView } from "primereact/dataview";

const MainPage: FC = () => {
  const [receitas, setReceitas] = useState<ReceitaViewModel[]>([]);

  useEffect(() => {
    setReceitas(ReceitaService.getReceitas());
  }, []);

  const itemTemplate = (product: ReceitaViewModel) => {
    return <div className="col-12">{product.nome}</div>;
  };
  return (
    <Container>
      <DataView value={receitas} itemTemplate={itemTemplate} />
    </Container>
  );
};

export default MainPage;
