import { useCallback } from "react";
import api from "../../axios/axios";
import { LoginViewModel } from "./view-models/login-view-model";
export const useAuthService = () => {
  const { post } = api;

  const login = useCallback(
    async (data: LoginViewModel) => (await post(`login`, data)).data,
    [post]
  );

  return { login };
};
