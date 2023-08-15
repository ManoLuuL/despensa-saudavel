import { useCallback } from "react";
import api from "../../axios/axios";
import { UserRegisterViewModel } from "./view-models/user-register-view-model";

export const useUserService = () => {
  const { get, post } = api;

  const getAllUsers = useCallback(async () => (await get(`users`)).data, [get]);

  const registerUser = useCallback(
    async (data: UserRegisterViewModel) => (await post(`users`, data)).data,
    [post]
  );

  return {
    getAllUsers,
    registerUser,
  };
};
