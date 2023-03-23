import { InputNumber, InputNumberProps } from 'primereact/inputnumber';
import {
  DefaultInputProps,
  DefaultInputRef,
  HasButtons
} from '../common/types';

export type NumberValueType = number | undefined;
export type NumberElementType = InputNumber;

type NumberElementAttributesType = InputNumberProps;

export type NumberInputProps<ControllerType = null> = HasButtons &
  DefaultInputProps<
    NumberValueType,
    NumberElementAttributesType,
    ControllerType
  >;

export type NumberInputRef = DefaultInputRef<
  NumberValueType,
  NumberElementType
> | null;
