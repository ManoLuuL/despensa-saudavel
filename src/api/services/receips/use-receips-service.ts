import { useCallback } from "react";
import api from "../../axios/axios";
import { IngredientesViewModel, ReceitasViewModel } from "./view-models";
import { ReceitaIngredienteDTO } from "./dto";

export const useReceipsService = () => {
  const { get, post } = api;

  const getIngredientes = useCallback(
    async () => (await get<IngredientesViewModel[]>(`ingredientes`)).data,
    [get]
  );

  const getAllReceitas = useCallback(
    async () => (await get<ReceitasViewModel[]>(`receitas`)).data,
    [get]
  );

  const getReceitaIngrediente = useCallback(
    async (data: ReceitaIngredienteDTO) => (await post(`receitas`, data)).data,
    [post]
  );

  const getAllFavoriteReceitas = useCallback(
    async (id: number) =>
      (await get<ReceitasViewModel[]>(`receitas_favoritas/${id}`)).data,
    [get]
  );

  const getSearchReceitas = useCallback(
    async (name: string) =>
      (await get<ReceitasViewModel[]>(`receitas/buscar?nome=${name}`)).data,
    [get]
  );

  return {
    getIngredientes,
    getAllReceitas,
    getReceitaIngrediente,
    getAllFavoriteReceitas,
    getSearchReceitas,
  };
};
