import "styled-components";
import { BreakpointVariants, Palette, Sizes, SurfacesPalette } from "./types";

declare module "styled-components" {
  export interface DefaultTheme {
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
}
