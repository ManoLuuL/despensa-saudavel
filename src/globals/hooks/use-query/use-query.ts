import { useCallback, useEffect, useState } from "react";
import { QueryStatus } from "../common/types";
import { UseQueryProps } from "./types";
import { useEffectOnce } from "../use-effect-once";
import { AnyFunction } from "../../utils/types";

export const useQuery = <DataType = unknown>(
  props: UseQueryProps<DataType>
) => {
  const {
    query,
    onSuccess,
    onError,
    refetchOnParamsChange = false,
    queryOnMount = !refetchOnParamsChange,
  } = props;

  const [data, setData] = useState<DataType>();
  const [status, setStatus] = useState<QueryStatus>("idle");
  const [fetchCount, setFetchCount] = useState(0);

  const refetch = useCallback(async () => {
    try {
      setStatus("fetching");

      const response = await query();
      setStatus("success");
      setFetchCount((count) => count + 1);

      setData(response);

      onSuccess?.(response);
      return response;
    } catch (e) {
      setStatus("error");

      onError?.(e);
      return null;
    }
  }, [query, onSuccess, onError]);

  useEffectOnce(() => {
    if (refetchOnParamsChange) return;

    if (queryOnMount) refetch();
    else setStatus("success");
  });

  useEffect(() => {
    if (refetchOnParamsChange) {
      refetch();
    }
  }, [refetchOnParamsChange, refetch]);

  const updateData = useCallback(
    (newData: DataType | ((oldData: DataType) => DataType)) => {
      typeof newData === "function"
        ? setData((oldData) => (newData as AnyFunction)(oldData))
        : setData(newData);
    },
    []
  );

  return {
    data,
    refetch,
    updateData,
    status,
    isIdle: status === "idle",
    isLoading: status !== "success" && status !== "error",
    isSuccess: status === "success",
    isError: status === "error",
    fetchCount,
    firstFetch: fetchCount === 0,
  };
};
