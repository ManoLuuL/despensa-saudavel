import { FC, useEffect, useState } from "react";
import { Container, TitlePage } from "./styles";
import { ReceitaViewModel } from "./types";
import { ReceitaService } from "../../utils/data";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const MainPage: FC = () => {
  const [receitas, setReceitas] = useState<ReceitaViewModel[]>([]);

  useEffect(() => {
    setReceitas(ReceitaService.getReceitas());
  }, []);

  return (
    <Container>
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
          {/* <Column field="secao." header="Company" style={{ width: '25%' }}></Column> */}
        </DataTable>
      </div>
    </Container>
  );
};

export default MainPage;
