export type Palette = {
  color: string;
  hover: string;
  active: string;
};

export type SurfacesPalette = {
  text: string;
  content: string;
  container: string;
};

export type ContrastPalette = Palette & {
  text: string;
};

export type Sizes = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type Colors =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "alert"
  | "contrast";

export type ColorVariants =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export interface StyledComponentsTheme {
  primary: Palette;
  secondary: Palette;
  success: Palette;
  danger: Palette;
  alert: Palette;

  contrast: ContrastPalette;

  textColor: string;

  surface: SurfacesPalette;

  borderRadii: Sizes;
  boxShadows: Sizes;
  fontSizes: Sizes;

  breakPoints: Sizes;
}
