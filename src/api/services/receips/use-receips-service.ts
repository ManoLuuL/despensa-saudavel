import { useCallback } from "react";
import api from "../../axios/axios";
import { IngredientesViewModel, ReceitasViewModel } from "./view-models";
import { ReceitaIngredienteDTO } from "./dto";

export const useReceipsService = () => {
  const { get, post } = api;

  const getIngredients = useCallback(
    async () => (await get<IngredientesViewModel[]>(`ingredientes`)).data,
    [get]
  );

  const getAllReceitas = useCallback(
    async () => (await get<ReceitasViewModel[]>(`receitas`)).data,
    [get]
  );

  const getReceipIngredient = useCallback(
    async (data: ReceitaIngredienteDTO) =>
      (await post(`/receitas/buscar_por_ingredientes_e_restricoes`, data)).data,
    [post]
  );

  const getAllFavoriteReceips = useCallback(
    async (id: number) =>
      (await get<ReceitasViewModel[]>(`receitas_favoritas/${id}`)).data,
    [get]
  );

  const getSearchReceips = useCallback(
    async (name: string) =>
      (await get<ReceitasViewModel[]>(`receitas/buscar?nome=${name}`)).data,
    [get]
  );

  return {
    getIngredients,
    getAllReceitas,
    getReceipIngredient,
    getAllFavoriteReceips,
    getSearchReceips,
  };
};
