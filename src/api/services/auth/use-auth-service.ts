import { useCallback } from "react";
import api from "../../axios/axios";
import { LoginViewModel } from "./view-models/login-view-model";
import { LoginReturnViewModel } from "./view-models/login-return-view-model";
export const useAuthService = () => {
  const { post } = api;

  const login = useCallback(
    async (data: LoginViewModel) =>
      (await post<LoginReturnViewModel>(`login`, data)).data,
    [post]
  );

  return { login };
};
