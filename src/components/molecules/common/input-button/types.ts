import { ReactNode, MouseEvent } from "react";

export type InputButtonProps = {
  tooltip: string;

  onClick(e: MouseEvent): void;
};

export type InputButtonType = InputButtonProps | ReactNode;

export type InputButtonsContainerProps = {
  buttons: InputButtonType[];
  info: ReactNode;
  canClear: boolean;
  handleClear(): void;
};
