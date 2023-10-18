import { useCallback } from "react";
import api from "../../axios/axios";
import { UserRegisterViewModel } from "./view-models/user-register-view-model";
import { SaveFavoriteDTO } from "./dto/save-favorite-dto";
import { UserDTO } from "./dto/user-dto";
import { UserViewModel } from "./view-models/user-view-model";

export const useUserService = () => {
  const { get, post, put } = api;

  const getAllUsers = useCallback(async () => (await get(`users`)).data, [get]);
  const getUser = useCallback(
    async (id: number) => (await get<UserViewModel>(`users/${id}`)).data,
    [get]
  );

  const registerUser = useCallback(
    async (data: UserRegisterViewModel) => (await post(`users`, data)).data,
    [post]
  );

  const updateUser = useCallback(
    async (data: UserDTO, id: number) => (await put(`users/${id}`, data)).data,
    [put]
  );

  const updatePassword = useCallback(
    async (data: { nova_senha: string }, id: number) =>
      (await put(`/users/${id}/change-password`, data)).data,
    [put]
  );

  const saveFavorite = useCallback(
    async (data: SaveFavoriteDTO) =>
      (await post(`salvar_receita_favorita`, data)).data,
    [post]
  );

  const getFavorite = useCallback(
    async (data: SaveFavoriteDTO) =>
      (await post<{ favorita: boolean }>(`verificar_receita_favorita`, data))
        .data,
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
    updateUser,
    getUser,
    updatePassword,
  };
};
