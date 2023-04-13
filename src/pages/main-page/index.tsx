import { FC, useEffect, useState } from "react";
import { Container, TitlePage } from "./styles";
import { ReceitaViewModel } from "./types";
import { ReceitaService } from "../../utils/data";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Navbar from "../../components/organism/Navbar";

const MainPage: FC = () => {
  const [receitas, setReceitas] = useState<ReceitaViewModel[]>([]);

  useEffect(() => {
    setReceitas(ReceitaService.getReceitas());
  }, []);

  const secoes = receitas.map((x) => x.secao);

  const ingredientes = secoes.map(
    (x) => x.find((p) => p.nome === " Ingredientes") ?? []
  );

  return (
    <Container>
      <Navbar />
      <TitlePage>Main-Page</TitlePage>
      <h2>Receitas disponiveis:</h2>
      <div className="p-3">
        <DataTable
          value={receitas}
          paginator
          showGridlines
          rows={10}
          rowsPerPageOptions={[10, 25, 50, 100]}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="_id.$oid"
            header="Id"
            style={{ width: "25%" }}
          ></Column>
          <Column field="nome" header="Nome" style={{ width: "25%" }}></Column>
        </DataTable>
        <div className="mt-5">
          <DataTable
            value={ingredientes}
            paginator
            showGridlines
            rows={10}
            rowsPerPageOptions={[10, 25, 50, 100]}
            tableStyle={{ minWidth: "50rem" }}
          >
            <Column
              field="nome"
              header="Nome"
              style={{ width: "25%" }}
            ></Column>
            <Column
              field="conteudo"
              header="Conteudo"
              style={{ width: "25%" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
