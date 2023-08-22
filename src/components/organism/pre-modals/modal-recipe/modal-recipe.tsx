import { FC, useMemo, useState } from "react";
import { RecipesModalProps } from "./types";
import { Divider } from "primereact/divider";
import { Modal } from "../../modal";
import { Button } from "../../../molecules/button-custom";
import { useToast } from "../../../../globals/hooks/use-toast";
import { useUserService } from "../../../../api/services";
import { useEffectOnce } from "../../../../globals/hooks";

export const RecipesModal: FC<RecipesModalProps> = (props) => {
  const { recipes, onHide } = props;

  const { saveFavorite, getFavorite, deleteFavorite } = useUserService();

  const data = useMemo(() => {
    const local = localStorage.getItem("userData");
    return JSON.parse(local ?? "");
  }, []);

  const modoPreparo = recipes?.modo_de_preparo.split("\n") ?? [];
  const [favorite, setFavorite] = useState(false);
  const { showSuccess } = useToast();

  useEffectOnce(() => {
    (async () => {
      const fav = await getFavorite({
        id_usuario: data.data.id ?? 0,
        id_receita: recipes?.id ?? 0,
      });

      setFavorite(fav);
    })();
  });

  const handleFavorite = async () => {
    try {
      if (favorite) {
        await deleteFavorite({
          id_usuario: data.data.id ?? 0,
          id_receita: recipes?.id ?? 0,
        });
        setFavorite(false);
        showSuccess("Receita removida dos favoritos");
      } else {
        await saveFavorite({
          id_usuario: data.data.id ?? 0,
          id_receita: recipes?.id ?? 0,
        });
        setFavorite(true);
        showSuccess("Receita favoritada com sucesso");
      }
    } catch (error) {
      console.error(error);
      showSuccess("Ocorreu um erro inesperado, tente novamente!");
    }
  };

  return (
    <Modal
      onHide={onHide}
      title={recipes?.nome}
      width={{ default: "60vw", mobile: "80vw" }}
    >
      <Button
        text={!favorite ? "Favoritar Receita" : "Desfavoritar Receita"}
        icon={{
          name: "star",
          size: 18,
        }}
        color={favorite ? "alert" : "secondary"}
        onClick={handleFavorite}
      />

      <Divider />
      <h2>Ingredientes:</h2>
      {recipes?.ingredientes.map((itens, index) => (
        <p key={index}>
          - {`${itens.quantidade} ${itens.unidade_de_medida}`} de {itens.nome}
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
