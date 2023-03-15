export type Palette = {
  color: string;
  text: string;
  hover: string;
  active: string;
};

export type SurfacesPalette = {
  text: string;
  content: string;
  container: string;
};

export type Sizes = {
  sm: string;
  normal: string;
  lg: string;
};

export type BreakpointVariants = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'alert';

export type ColorVariants =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
