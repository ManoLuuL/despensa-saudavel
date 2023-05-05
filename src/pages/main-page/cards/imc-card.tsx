import { Card } from "primereact/card";
import imcIm from "../../../assets/imc-img.jpg";
import { useNavigate } from "react-router-dom";

export const CardIMC = () => {
  const navigate = useNavigate();

  const header = <img alt="Card" src={imcIm} />;

  return (
    <Card
      className="col-4 md:w-25rem m-3"
      title="Calcular IMC"
      subTitle="Venha calcular seu IMC"
      header={header}
      onClick={() => navigate("/CalcularIMC")}
      style={{
        cursor: "pointer",
      }}
    />
  );
};
