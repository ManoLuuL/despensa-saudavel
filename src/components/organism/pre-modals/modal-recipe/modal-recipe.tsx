import { FC } from "react";
import { RecipesModalProps } from "./types";
import { Divider } from "primereact/divider";
import { Modal } from "../../modal";

export const RecipesModal: FC<RecipesModalProps> = (props) => {
  const { recipes, onHide } = props;

  const modoPreparo = recipes?.modo_preparo.split("\n") ?? [];

  return (
    <Modal
      onHide={onHide}
      title={recipes?.titulo}
      width={{ default: "60vw", mobile: "80vw" }}
    >
      <h2>Ingredientes:</h2>
      {recipes?.ingredientes.map((itens, index) => (
        <p key={index}>
          {" "}
          {itens.ingrediente} - {itens.quantidade}
        </p>
      ))}
      <Divider />
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
