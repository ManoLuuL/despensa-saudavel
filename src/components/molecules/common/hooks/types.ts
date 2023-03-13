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

export type UseInputBoxProps<ValType, ControllerType> = {
  options: {
    startValue: ValType;
    controllerValueModifier?(controllerValue: ValType): ValType;
  };
  inputProps: DefaultInputProps<ValType, unknown, ControllerType>;
};

export type UseInputBoxButtonsProps = {
  buttons: InputButtonType[];
  info: ReactNode;
  canClear: boolean;
  handleClear(): void;
};
