import { FC } from "react";
import { IMCDietasProps } from "./types";
import { Modal } from "../../../components/organism/modal";
import {
  DietDetox,
  DietGanhoDeMassa,
  DietReducerGordura,
  DietaObesoBaixoCusto,
} from "./diets";
import { Divider } from "primereact/divider";

export const ModalDietasIMC: FC<IMCDietasProps> = (props) => {
  const { onHide, category, id, title } = props;

  const getDiets = (category: "low" | "high" | "medium", id: number) => {
    if (category === "low") {
      if (id === 1) {
        return <DietGanhoDeMassa />;
      } else {
        return <DietDetox />;
      }
    } else if (category === "medium") {
      if (id === 1) {
        return <DietGanhoDeMassa />;
      } else if (id === 2) {
        return <DietReducerGordura />;
      } else {
        return <DietDetox />;
      }
    } else {
      if (id === 1) {
        return <DietaObesoBaixoCusto />;
      } else if (id === 2) {
        return <DietReducerGordura />;
      } else {
        return <DietDetox />;
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
      <Divider />
      {getDiets(category, id)}
    </Modal>
  );
};
