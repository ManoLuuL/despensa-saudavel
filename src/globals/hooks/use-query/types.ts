import { DefaultQueryCallbacks } from "../common/types";

export type UseQueryProps<DataType> = DefaultQueryCallbacks<DataType> & {
  query(): Promise<DataType> | DataType;

  /**
   * @default true
   */
  queryOnMount?: boolean;

  /**
   * Se ativo, refaz a query toda vez que algum parâmetro atualizar.
   * !!!! ATENÇÃO! MEMOIZAR PARÂMETRO "QUERY"
   *
   * Se ativo, queryOnMount é ignorado
   * @default false;
   */
  refetchOnParamsChange?: boolean;
};
