import { FC, useMemo, useState } from "react";
import { RecipesModalProps } from "./types";
import { Divider } from "primereact/divider";
import { Modal } from "../../modal";
import { Button } from "../../../molecules/button-custom";
import { useToast } from "../../../../globals/hooks/use-toast";
import { useUserService } from "../../../../api/services";
import { useEffectOnce } from "../../../../globals/hooks";
import { Skeleton } from "primereact/skeleton";

export const RecipesModal: FC<RecipesModalProps> = (props) => {
  const { recipes, onHide } = props;

  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    })();
  });

  const handleFavorite = async () => {
    setIsLoadingSubmit(true);
    try {
      if (favorite) {
        await deleteFavorite({
          id_usuario: data.data.id ?? 0,
          id_receita: recipes?.id ?? 0,
        });
        setFavorite(false);
        showSuccess("Receita removida dos favoritos");
        setIsLoadingSubmit(false);
      } else {
        await saveFavorite({
          id_usuario: data.data.id ?? 0,
          id_receita: recipes?.id ?? 0,
        });
        setFavorite(true);
        showSuccess("Receita favoritada com sucesso");
        setIsLoadingSubmit(false);
      }
    } catch (error) {
      console.error(error);
      showSuccess("Ocorreu um erro inesperado, tente novamente!");
      setIsLoadingSubmit(false);
    }
  };

  return (
    <Modal
      onHide={onHide}
      title={recipes?.nome}
      width={{ default: "60vw", mobile: "80vw" }}
    >
      {isLoading ? (
        <>
          <div className="grid">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <Skeleton height="10rem" className="col-6 m-2" key={index} />
              ))}
          </div>
        </>
      ) : (
        <>
          <Button
            text={!favorite ? "Favoritar Receita" : "Desfavoritar Receita"}
            loading={isLoadingSubmit}
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
              - {`${itens.quantidade} ${itens.unidade_de_medida}`} de{" "}
              {itens.nome}
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
        </>
      )}
    </Modal>
  );
};
