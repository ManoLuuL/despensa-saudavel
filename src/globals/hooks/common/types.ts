import { Promiseable } from "../../utils/types";

export type QueryStatus = "idle" | "fetching" | "error" | "success";

export type QueriesType<QueriesReturnType> = {
  [key in keyof QueriesReturnType]: () => Promiseable<QueriesReturnType[key]>;
};

export type DefaultQueryCallbacks<DataType> = {
  onSuccess?(data: DataType): Promise<void> | void;
  onError?(e: unknown): Promise<void> | void;
};
