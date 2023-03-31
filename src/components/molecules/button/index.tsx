import { FC } from "react";
import { ButtonStyled } from "./styles";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = (props) => {
  const { content, fontSize } = props;
  return <ButtonStyled fontSize={fontSize}>{content}</ButtonStyled>;
};
