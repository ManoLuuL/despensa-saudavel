import { ColorVariants, Colors } from './types';

export const GetColorVariant = (
  color: Colors | 'surface',
  variant: ColorVariants
) => {
  let colorName: string;
  switch (color) {
    case 'secondary':
      colorName = 'bluegray';
      break;
    case 'success':
      colorName = 'green';
      break;
    case 'alert':
      colorName = 'yellow';
      break;
    case 'danger':
      colorName = 'red';
      break;
    case 'surface':
      colorName = 'surface';
      break;
    default:
      colorName = 'primary';
      break;
  }

  return `var(--${colorName}-${variant})`;
};
