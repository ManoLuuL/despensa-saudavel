import { CSSProperties } from "react";

export type DefaultElementProps = {
  /**
   * Identificador.
   */
  id?: string;
  className?: string;
  style?: CSSProperties;
};

export type DefaultInputRef<ValType, ElementRefType> = {
  getValue: () => ValType;
  setValue(value: ValType): void;
  clearValue(): void;

  getError(): string;
  setError(error: string): void;
  clearError(): void;
  validate(): Promise<string | undefined>;

  focus(): void;

  elementRef: ElementRefType | null;
};
