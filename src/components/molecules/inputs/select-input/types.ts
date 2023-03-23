import {
  DefaultDropdownInputsProps,
  DefaultInputProps,
  DefaultInputRef,
  HasButtons,
  InputBoxStyleProps
} from '../common/types';
import { Dropdown, DropdownProps } from 'primereact/dropdown';

import { ReactNode } from 'react';

export type SelectValueType<ItemType> = ItemType | undefined;
export type SelectElementType = Dropdown;

export type StyledSelectProps = InputBoxStyleProps;

type SelectElementAttributtesType = DropdownProps;

type OmittedAttributes = {
  placeholder: unknown;
};

type OmitedDefaultInputProps<ItemType extends object, ControllerType> = Omit<
  DefaultInputProps<
    SelectValueType<ItemType>,
    SelectElementAttributtesType,
    ControllerType
  >,
  keyof OmittedAttributes
>;

export type SelectInputProps<
  ItemType extends object,
  ControllerType = null
> = HasButtons &
  OmitedDefaultInputProps<ItemType, ControllerType> &
  DefaultDropdownInputsProps<ItemType> & {
    valueRender?(item?: ItemType): ReactNode;
  };

export type SelectInputRef<ItemType> = DefaultInputRef<
  SelectValueType<ItemType>,
  SelectElementType
> | null;
