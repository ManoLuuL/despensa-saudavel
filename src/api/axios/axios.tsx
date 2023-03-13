import axios, {
  AxiosError,
  RawAxiosRequestHeaders,
  AxiosRequestConfig,
} from "axios";
import { useCallback, useLayoutEffect, useMemo } from "react";
import { useAuth } from "../../globals/use-form/stores/auth";
import { DynamicObject } from "../../globals/utils/types";
import { BASE_API_URL } from "./consts";
import { ApiResponse, UseAxiosInstanceProps } from "./types";

const onRequestError = (error: AxiosError): Promise<unknown> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  const erro = "Serviço indisponível no momento, tente novamente mais tarde"; // !!!
  return Promise.reject(erro);
};

export const useAxiosInstance = (props?: UseAxiosInstanceProps) => {
  const { getTenant, getToken } = useAuth();

  const axiosInstance = useMemo(() => axios.create(), []);

  /*
   * Como alguns requests são feitas ao carregar o documento,
   * é necessário que o axiosInstance esteja configurado.
   * Então, é utilizado useLayoutEffect.
   */
  useLayoutEffect(() => {
    const interceptorId = axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig): AxiosRequestConfig => {
        const tenant = getTenant();
        const token = getToken();

        return {
          ...config,
          baseURL: BASE_API_URL + (props?.baseControllerUrl || ""),
          headers: {
            tenant,
            "Content-type": "Application/json",
            Authorization: token ? `Bearer ${token}` : "",
            ...(config.headers as RawAxiosRequestHeaders),
          },
        };
      },
      onRequestError
    );

    return () => {
      axiosInstance.interceptors.request.eject(interceptorId);
    };
  }, [getTenant, getToken, axiosInstance, props?.baseControllerUrl]);

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
