import { useCallback } from "react";
import api from "../../axios/axios";
import { UserRegisterViewModel } from "./view-models/user-register-view-model";
import { SaveFavoriteDTO } from "./dto/save-favorite-dto";

export const useUserService = () => {
  const { get, post } = api;

  const getAllUsers = useCallback(async () => (await get(`users`)).data, [get]);

  const registerUser = useCallback(
    async (data: UserRegisterViewModel) => (await post(`users`, data)).data,
    [post]
  );

  const saveFavorite = useCallback(
    async (data: SaveFavoriteDTO) =>
      (await post(`salvar_receita_favorita`, data)).data,
    [post]
  );

  const getFavorite = useCallback(
    async (data: SaveFavoriteDTO) =>
      (await post(`verificar_receita_favorita`, data)).data,
    [post]
  );

  const deleteFavorite = useCallback(
    async (data: SaveFavoriteDTO) =>
      (await post(`remover_receita_favorita`, data)).data,
    [post]
  );

  return {
    getAllUsers,
    registerUser,
    saveFavorite,
    getFavorite,
    deleteFavorite,
  };
};
