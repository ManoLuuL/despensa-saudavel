import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { NavLink } from "react-router-dom";

export const CardIMC = () => {
  const header = (
    <img
      alt="Card"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUVqbbLcRkokdFq51r3JsqlT11pa3WGRULXA&usqp=CAU"
    />
  );
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <NavLink to={"/CalcularIMC"}>
        <Button label="Acesse" icon="pi pi-sign-in" />
      </NavLink>
    </div>
  );

  return (
    <Card
      className="col-4 md:w-25rem m-3"
      title="Calcular IMC"
      subTitle="Venha calcular seu IMC"
      footer={footer}
      header={header}
    />
  );
};
