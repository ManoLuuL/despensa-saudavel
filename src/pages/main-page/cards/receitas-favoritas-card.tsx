import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import img from "../../../assets/favorite-receipe.png";

export const ReceitasFavoritasCard = () => {
  const navigate = useNavigate();

  const header = <img alt="Card" src={img} />;

  return (
    <Card
      className="col-4 md:w-25rem m-3"
      title="Receitas Favoritas"
      subTitle="Veja suas receitas favoritas"
      header={header}
      onClick={() => navigate("/ReceitasFavoritas")}
      style={{
        cursor: "pointer",
      }}
    />
  );
};
