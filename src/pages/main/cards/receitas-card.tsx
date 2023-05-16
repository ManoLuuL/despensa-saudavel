import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import receiptImg from "../../../assets/book-img.jpg";

export const ReceitasCard = () => {
  const navigate = useNavigate();

  const header = <img alt="Card" src={receiptImg} />;

  return (
    <Card
      className="col-4 md:w-25rem m-3"
      title="Buscar Receitas"
      subTitle="Busque receitas com o que tem em casa"
      header={header}
      onClick={() => navigate("/BuscarReceitas")}
      style={{
        cursor: "pointer",
      }}
    />
  );
};
