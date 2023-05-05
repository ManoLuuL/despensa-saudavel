import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { NavLink } from "react-router-dom";
import receiptImg from "../../../assets/book-img.jpg";

export const ReceitasCard = () => {
  const header = <img alt="Card" src={receiptImg} />;
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <NavLink to={"/BuscarReceitas"}>
        <Button label="Acesse" icon="pi pi-sign-in" />
      </NavLink>
    </div>
  );
  return (
    <Card
      className="col-4 md:w-25rem m-3"
      title="Buscar Receitas"
      subTitle="Busque receitas com o que tem em casa"
      footer={footer}
      header={header}
    />
  );
};
