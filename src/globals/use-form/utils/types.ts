export type Primitive = string | boolean | number;

export type DynamicObject<ValueType = string> = {
  [key: string]: ValueType;
};

export type Nullable<T = void> = T | null | undefined;
