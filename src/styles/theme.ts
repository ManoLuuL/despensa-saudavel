import { StyledComponentsTheme } from "./types";

const BASE_THEME_PROPS: Omit<
  StyledComponentsTheme,
  keyof {
    surface: unknown;
    textColor: unknown;
    contrast: unknown;
    secondary: unknown;
  }
> = {
  primary: {
    color: "var(--primary-500)",
    hover: "var(--primary-700)",
    active: "var(--primary-900)",
  },
  success: {
    color: "#309E3A",
    hover: "#2a8c33",
    active: "#23752b",
  },
  danger: {
    color: "#FF0002",
    hover: "#CC0002",
    active: "#A30002",
  },
  alert: {
    color: "#FFC700",
    hover: "#edba02",
    active: "#d9aa00",
  },

  borderRadii: {
    xs: "4px",
    sm: "6px",
    md: "10px",
    lg: "20px",
    xl: "9999px",
  },

  boxShadows: {
    xs: "",
    sm: "",
    md: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    lg: "2px 2px 5px 5px rgba(0, 0, 0, 0.25)",
    xl: "",
  },

  fontSizes: {
    xs: "8px",
    sm: "10px",
    md: "12px",
    lg: "15px",
    xl: "20px",
  },

  breakPoints: {
    xs: "0px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
};

export const LightTheme: StyledComponentsTheme = {
  ...BASE_THEME_PROPS,
  secondary: {
    color: "#585858",
    hover: "#464646",
    active: "#383838",
  },
  surface: {
    text: "#585858",
    content: "#FFFFFF",
    container: "#D9D9D9",
  },
  contrast: {
    color: "#1D1D1D",
    hover: "#171717",
    active: "#121212",
    text: "#FFFFFF",
  },

  textColor: "#FFFFFF",
};

export const DarkTheme: StyledComponentsTheme = {
  ...BASE_THEME_PROPS,
  secondary: {
    color: "#949494",
    hover: "#BABABA",
    active: "#D3D3D3",
  },
  surface: {
    text: "#FFFFFF",
    content: "#121212",
    container: "#1D1D1D",
  },
  contrast: {
    color: "#FFFFFF",
    hover: "#FFFFFF",
    active: "#FFFFFF",
    text: "#121212",
  },

  textColor: "#FFFFFF",
};
