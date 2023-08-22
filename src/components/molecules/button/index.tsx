import { FC } from "react";
import { ButtonProps } from "./types";
import { ButtonStyled } from "./styles";

export const Button: FC<ButtonProps> = (props) => {
  const { content, type, disabled } = props;
  return (
    <ButtonStyled disabled={disabled} type={type}>
      {content}
    </ButtonStyled>
  );
};
