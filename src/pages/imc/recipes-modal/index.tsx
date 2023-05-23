import { FC } from "react";
import { RecipesModalProps } from "./types";
import { Modal } from "../../../components/organism/modal";

export const RecipesModal: FC<RecipesModalProps> = (props) => {
  const { recipes, onHide } = props;
  return (
    <Modal
      onHide={onHide}
      title={recipes?.titulo}
      width={{ default: "60vw", mobile: "80vw" }}
    >
      {recipes?.modo_preparo}
    </Modal>
  );
};
