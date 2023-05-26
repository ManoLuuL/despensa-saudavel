import { FC } from "react";
import { RecipesModalProps } from "./types";
import { Modal } from "../../../components/organism/modal";
import { Divider } from "primereact/divider";

export const RecipesModal: FC<RecipesModalProps> = (props) => {
  const { recipes, onHide } = props;

  const modoPreparo = recipes?.modo_preparo.split("\n") ?? [];

  return (
    <Modal
      onHide={onHide}
      title={recipes?.titulo}
      width={{ default: "60vw", mobile: "80vw" }}
    >
      <h2>Modo de Preparo:</h2>
      <ol>
        {modoPreparo.map((itens, index) => (
          <li key={index}>{itens.trim().replace(/^\d+\. /, "")}</li>
        ))}
      </ol>
      <Divider />
      <h2>Rendimento: {recipes?.rendimento}</h2>
    </Modal>
  );
};
