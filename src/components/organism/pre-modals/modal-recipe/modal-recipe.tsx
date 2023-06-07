import { FC, useState } from "react";
import { RecipesModalProps } from "./types";
import { Divider } from "primereact/divider";
import { Modal } from "../../modal";
import { Button } from "../../../molecules/button-custom";
import { useToast } from "../../../../globals/hooks/use-toast";

export const RecipesModal: FC<RecipesModalProps> = (props) => {
  const { recipes, onHide } = props;

  const modoPreparo = recipes?.modo_preparo.split("\n") ?? [];
  const [favorite, setFavorite] = useState(false);
  const { showSuccess } = useToast();

  return (
    <Modal
      onHide={onHide}
      title={recipes?.titulo}
      width={{ default: "60vw", mobile: "80vw" }}
    >
      <Button
        text={!favorite ? "Favoritar Receita" : "Desfavoritar Receita"}
        icon={{
          name: "star",
          size: 18,
        }}
        color={favorite ? "alert" : "secondary"}
        onClick={() => {
          setFavorite(!favorite);
          if (favorite) showSuccess("Receita removida dos favoritos");
          else showSuccess("Receita favoritada com sucesso");
        }}
      />

      <Divider />
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
