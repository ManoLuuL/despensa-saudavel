import { HTMLAttributes } from 'react';
import {
  DefaultInputProps,
  DefaultInputRef,
  HasButtons,
  HasType
} from '../common/types';

export type TextValueType = string | undefined;
export type TextElementType = HTMLInputElement;

type TextElementAttributesType = HTMLAttributes<TextElementType>;

export type TextInputTypes = 'text' | 'password';

export type TextInputProps<ControllerType = null> = HasButtons &
  HasType<TextInputTypes> &
  DefaultInputProps<TextValueType, TextElementAttributesType, ControllerType>;

export type TextInputRef = DefaultInputRef<
  TextValueType,
  TextElementType
> | null;
