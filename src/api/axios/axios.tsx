import axios from "axios";
import { useCallback, useMemo } from "react";
import { DynamicObject } from "../../globals/utils/types";
import { ApiResponse, UseAxiosInstanceProps } from "./types";

export const useAxiosInstance = (props?: UseAxiosInstanceProps) => {
  const axiosInstance = useMemo(() => axios.create(), []);

  /*
   * Como alguns requests são feitas ao carregar o documento,
   * é necessário que o axiosInstance esteja configurado.
   * Então, é utilizado useLayoutEffect.
   */

  const post = useCallback(
    async <DataType = never, ParamsType = unknown>(
      url: string,
      params?: ParamsType,
      config?: DynamicObject
    ) => {
      return (
        await axiosInstance.post<ApiResponse<DataType>>(url, params, config)
      ).data;
    },
    [axiosInstance]
  );

  const put = useCallback(
    async <DataType = never, ParamsType = unknown>(
      url: string,
      params?: ParamsType,
      config?: DynamicObject
    ) => {
      return (
        await axiosInstance.put<ApiResponse<DataType>>(url, params, config)
      ).data;
    },
    [axiosInstance]
  );

  const get = useCallback(
    async <DataType,>(url: string, config?: DynamicObject) => {
      return (await axiosInstance.get<ApiResponse<DataType>>(url, config)).data;
    },
    [axiosInstance]
  );

  const remove = useCallback(
    async <DataType = never, ParamsType = unknown>(
      url: string,
      params?: ParamsType,
      config?: DynamicObject
    ) => {
      return (
        await axiosInstance.delete<ApiResponse<DataType>>(url, {
          ...config,
          data: params,
        })
      ).data;
    },
    [axiosInstance]
  );

  return { get, post, put, remove };
};
