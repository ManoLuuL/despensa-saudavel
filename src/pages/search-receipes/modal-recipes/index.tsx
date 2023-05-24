import { FC } from "react";
import { ModalRecipesSearchProps } from "./types";
import { Modal } from "../../../components/organism/modal";
import { Divider } from "primereact/divider";

export const ModalRecipesSearch: FC<ModalRecipesSearchProps> = (props) => {
  const { onHide, recipes } = props;

  return (
    <Modal
      onHide={onHide}
      title={recipes?.titulo}
      width={{ default: "70vw", mobile: "80vw" }}
    >
      <h2>Ingredientes:</h2>
      {recipes?.ingredientes.map((itens, index) => (
        <p key={index}>
          {" "}
          {itens.ingrediente} - {itens.quantidade}
        </p>
      ))}
      <Divider />
      <h2>Modo de preparo:</h2>
      {recipes?.modo_preparo}
      <Divider />
      <h2>Rendimento: {recipes?.rendimento}</h2>
    </Modal>
  );
};
