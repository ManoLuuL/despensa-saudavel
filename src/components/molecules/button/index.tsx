import { FC } from "react";
import { ButtonStyled } from "./styles";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = (props) => {
  const { content, fontSize, type, disabled } = props;
  return (
    <ButtonStyled fontSize={fontSize} type={type} disabled={disabled}>
      {content}
    </ButtonStyled>
  );
};
