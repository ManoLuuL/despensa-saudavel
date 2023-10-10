export type DynamicObject<ValueType = string> = {
  [key: string]: ValueType;
};

export type Nullable<T = void> = T | null | undefined;

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any) => any;

export type Promiseable<T> = Promise<T> | T;
