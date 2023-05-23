import { ButtonSizes } from './types';

export const ICON_BUTTON_PADDING_IN_PIXELS = 4;

export const BUTTON_PADDINGS: { [key in ButtonSizes]: string } = {
  small: '0 12px',
  default: '0 16px',
  large: '0 20px'
};

export const BUTTON_HEIGHTS: { [key in ButtonSizes]: string } = {
  small: '30px',
  default: '34px',
  large: '38px'
};
