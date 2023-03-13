import { InputButtonType } from "./input-button/types";
import { DEFAULT_VALIDATION_DEBOUNCER_TIMER_IN_MILISSECONDS } from "./consts";
import { ReactNode } from "react";
import { Controller } from "../../../globals/use-form";
import { DefaultElementProps } from "../../types";

export type InputValidationRules<ValType> = {
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;

  /** Torna o campo obrigatório, mudando seu visual e seu prenchimento é requerido
   * @default false
   */
  required?: boolean;

  /**
   * DOCUMENTAR! -> define tempo p/ chamar validacao de erro (tecnica: debounce)
   * @default@see DEFAULT_VALIDATION_DEBOUNCER_TIMER_IN_MILISSECONDS
   */
  debounceTimer?: number;

  // true = ja existe, então mostra erro. false = não existe, então não mostra erro.
  unique?(currentValue: ValType): boolean | Promise<boolean>;

  // se retornar string, seta erro igual a string. se retornar null, nao seta erro.
  customValidation?(
    currentValue: ValType
  ): string | null | Promise<string | null>;
};

export type CustomInputName<ControllerType> = ControllerType extends null
  ? string
  : keyof ControllerType;

export type DefaultInputProps<
  ValType,
  ElementAttributesType,
  ControllerType,
  KeyType = CustomInputName<ControllerType>
> = DefaultElementProps & {
  name: KeyType;
  /** Descrição do campo */
  label?: string;
  /**
   * Descreve o valor esperado.
   */
  placeholder?: string;

  /**
   * Controlador utilizado pelo formulário.
   */
  controller?: Controller<ControllerType>;

  /**
   * Regras de validação.
   */
  validationRules?: InputValidationRules<ValType>;

  /** Texto que aparece na info */
  info?: ReactNode;

  /** Torna o campo desibilitado, mudando seu visual, impendindo interações e mudança de valor
   * @default false
   */
  disabled?: boolean;
  /** Limita o campo somente para leitura, mudando seu visual e impendindo mudança de valor
   * @default false
   */
  readOnly?: boolean;
  /** Valor para input controlado */
  value?: ValType | null;
  /** Função disparada ao alterar o valor do campo */
  onChange?(newValue: ValType, oldValue: ValType): void;
  /** Função disparada ao focar campo */
  onFocusIn?(currentValue: ValType): void;
  /** Função disparada ao desfocar campo */
  onFocusOut?(currentValue: ValType): void;
  /** Predefine um valor ao campo */
  defaultValue?: ValType;
  /** Propriedades HTML nativas baseadas no componente */
  elementAttributes?: ElementAttributesType;
  /**
   * Quando habilitado ignora a margin no texto de erro.
   */
  ignoreErrorMargin?: boolean;
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

export type HasButtons = {
  /** Define os botões que aparecerão no componente */
  buttons?: InputButtonType[];
  /** Quando habilitado, exibe um botão de limpar o componente
   */
  showClearButton?: boolean;
};

export type HasType<Type> = {
  type?: Type;
};

export type InputBoxStyleProps = {
  padding: number;
  hasError: boolean;
  required: boolean;
  readOnly: boolean;
  disabled: boolean;
  ignoreErrorMargin: boolean;
};
