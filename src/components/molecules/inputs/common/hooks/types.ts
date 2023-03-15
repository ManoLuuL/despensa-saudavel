import { ReactNode } from 'react';
import { InputButtonType } from '../input-button/types';
import { DefaultInputProps, DefaultInputRef } from '../types';

export type UseInputControllerProps<
  ValueType,
  ElementRefType,
  ElementAttributesType,
  ControllerType
> = {
  inputProps: DefaultInputProps<
    ValueType,
    ElementAttributesType,
    ControllerType
  >;
  refFunctions: DefaultInputRef<ValueType, ElementRefType>;
};

export type UseInputProps<ValType, ControllerType> = {
  options: {
    startValue: ValType;
  };
  inputProps: DefaultInputProps<ValType, unknown, ControllerType>;
};

export type UseInputButtonsProps = {
  buttons: InputButtonType[];
  info: ReactNode;
  canClear: boolean;
  handleClear(): void;
};
