import { useCallback } from "react";
import api from "../../../axios/axios";

export const useUserService = () => {
  const { get } = api;

  const getAllUsers = useCallback(async () => (await get(`users`)).data, [get]);

  return {
    getAllUsers,
  };
};
