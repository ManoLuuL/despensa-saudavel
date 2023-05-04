import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { NavLink } from "react-router-dom";
import img from "../../../assets/favorite-receipe.png";

export const ReceitasFavoritasCard = () => {
  const header = <img alt="Card" src={img} />;
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <NavLink to={"/ReceitasFavoritas"}>
        <Button label="Acesse" icon="pi pi-sign-in" />
      </NavLink>
    </div>
  );
  return (
    <Card
      className="col-4 md:w-25rem m-3"
      title="Receitas Favoritas"
      subTitle="Veja suas receitas favoritas"
      footer={footer}
      header={header}
    />
  );
};
