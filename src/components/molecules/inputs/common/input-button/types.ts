import { ReactNode } from "react";
import { ButtonHtmlAttributes, ButtonProps } from "../../../new-button/types";

export type InputButtonElementType = ButtonHtmlAttributes | undefined;

export type InputButtonProps = ButtonProps;

export type InputButtonType = InputButtonProps | ReactNode;

export type InputButtonsContainerProps = {
  buttons: InputButtonType[];
  info: ReactNode;
  canClear: boolean;
  handleClear(): void;
};
