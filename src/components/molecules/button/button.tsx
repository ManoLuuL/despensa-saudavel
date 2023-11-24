import { ButtonStyled, Loader } from "./styles";

import { ButtonProps } from "./types";
import { FC } from "react";

export const Button: FC<ButtonProps> = (props) => {
  const { content, type, disabled, loading, onChange } = props;

  return (
    <ButtonStyled
      disabled={disabled ?? loading}
      type={type}
      style={{
        cursor: disabled ? "not-allowed" : loading ? "progress" : "pointer",
        opacity: disabled ?? loading ? "0.6" : "1",
      }}
      onChange={onChange}
    >
      {loading ? <Loader /> : content}
    </ButtonStyled>
  );
};
