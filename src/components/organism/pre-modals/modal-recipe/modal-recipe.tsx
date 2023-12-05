import { FC, useMemo, useState } from "react";

import { ButtonCustom } from "../../../molecules/button-custom";
import { Checkbox } from "primereact/checkbox";
import { Divider } from "primereact/divider";
import { Modal } from "../../modal";
import { RecipesModalProps } from "./types";
import { Skeleton } from "primereact/skeleton";
import { useEffectOnce } from "../../../../globals";
import { useToast } from "../../../../globals/hooks/use-toast";
import { useUserService } from "../../../../api/services";

export const RecipesModal: FC<RecipesModalProps> = (props) => {
  const {
    recipes,
    onHide,
    showFavoriteButton = true,
    recipesMock,
    showRestrictions = true,
  } = props;

  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { saveFavorite, getFavorite, deleteFavorite } = useUserService();

  const data = useMemo(() => {
    const local = localStorage.getItem("userData");
    return JSON.parse(local ?? "");
  }, []);

  const modoPreparo = recipes?.modo_de_preparo.split("\n") ?? [];
  const modoPreparoMock = recipesMock?.modo_preparo.split("\n") ?? [];
  const [favorite, setFavorite] = useState(false);
  const { showSuccess } = useToast();

  useEffectOnce(() => {
    (async () => {
      const fav = await getFavorite({
        id_usuario: data.id ?? 0,
        id_receita: recipes?.id ?? 0,
      });

      setFavorite(fav.favorita);
      setIsLoading(false);
    })();
  });

  const handleFavorite = async () => {
    setIsLoadingSubmit(true);
    try {
      if (favorite) {
        await deleteFavorite({
          id_usuario: data.id ?? 0,
          id_receita: recipes?.id ?? 0,
        });
        setFavorite(false);
        showSuccess("Receita removida dos favoritos");
        setIsLoadingSubmit(false);
      } else {
        await saveFavorite({
          id_usuario: data.id ?? 0,
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
      title={recipes ? recipes.nome : recipesMock?.titulo}
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
          {showFavoriteButton && (
            <>
              <ButtonCustom
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
            </>
          )}
          {showRestrictions && (
            <>
              <h2>Restrições:</h2>
              <div className="flex flex-wrap justify-content-between  gap-3 mt-2 mb-4">
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="Diabetico"
                    name="Diabetico"
                    value="Diabetico"
                    checked={recipes?.diabetico ?? false}
                    disabled
                  />
                  <label htmlFor="Diabetico" className="ml-2">
                    Diabetico
                  </label>
                </div>
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="Vegetariano"
                    name="Vegetariano"
                    value="Vegetariano"
                    checked={recipes?.vegetariano ?? false}
                    disabled
                  />
                  <label htmlFor="Vegetariano" className="ml-2">
                    Vegetariano
                  </label>
                </div>
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="Vegano"
                    name="Vegano"
                    value="Vegano"
                    checked={recipes?.vegano ?? false}
                    disabled
                  />
                  <label htmlFor="Vegano" className="ml-2">
                    Vegano
                  </label>
                </div>
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="alergico_a_lactose"
                    name="alergico_a_lactose"
                    value="alergico_a_lactose"
                    checked={recipes?.alergico_a_lactose ?? false}
                    disabled
                  />
                  <label htmlFor="alergico_a_lactose" className="ml-2">
                    Alergico a lactose
                  </label>
                </div>
              </div>
            </>
          )}

          <h2>Ingredientes:</h2>
          {recipes
            ? recipes.ingredientes.map((itens, index) => (
                <p key={index}>
                  -{" "}
                  {itens.quantidade !== "0"
                    ? `${itens.quantidade} ${itens.unidade_de_medida} de ${itens.nome}`
                    : `${itens.nome} ${itens.unidade_de_medida}`}
                </p>
              ))
            : recipesMock?.ingredientes.map((itens, index) => (
                <p key={index}>
                  - {`${itens.quantidade} `} de {itens.ingrediente}
                </p>
              ))}
          <Divider />
          <h2>Modo de Preparo:</h2>
          <ol>
            {recipes
              ? modoPreparo.map((itens, index) => (
                  <li key={index}>{itens.trim().replace(/^\d+\. /, "")}</li>
                ))
              : modoPreparoMock.map((itens, index) => (
                  <li key={index}>{itens.trim().replace(/^\d+\. /, "")}</li>
                ))}
          </ol>
          <Divider />
          <h2>
            Rendimento: {recipes ? recipes.rendimento : recipesMock?.rendimento}
          </h2>
        </>
      )}
    </Modal>
  );
};
