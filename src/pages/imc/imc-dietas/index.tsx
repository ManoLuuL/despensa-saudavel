import { FC } from "react";
import { IMCDietasProps } from "./types";
import { Modal } from "../../../components/organism/modal";
import {
  DietGanhoDeMassa,
  DietReducerGordura,
  DietaObesoBaixoCusto,
} from "./diets";

export const ModalDietasIMC: FC<IMCDietasProps> = (props) => {
  const { onHide, category, id, title } = props;

  const getDiets = (category: "low" | "high" | "medium", id: number) => {
    if (category === "low") {
      if (id === 1) {
        return <DietGanhoDeMassa />;
      } else if (id === 2) {
        return <>Dieta 2</>;
      } else {
        return <>Dieta 3</>;
      }
    } else if (category === "medium") {
      if (id === 1) {
        return <>Dieta 1</>;
      } else if (id === 2) {
        return <>Dieta 2</>;
      } else {
        return <>Dieta 3</>;
      }
    } else {
      if (id === 1) {
        return <DietaObesoBaixoCusto />;
      } else if (id === 2) {
        return <DietReducerGordura />;
      } else {
        return <>Dieta 3</>;
      }
    }
  };

  return (
    <Modal
      onHide={onHide}
      title={title}
      width={{ default: "70vw", mobile: "80vw" }}
    >
      <h3 style={{ color: "red" }}>
        Não nos responsabilizamos por resultados negativos, lembre-se de sempre
        buscar ajuda médica e de profissionais da área
      </h3>
      {getDiets(category, id)}
    </Modal>
  );
};
