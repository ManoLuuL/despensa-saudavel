import { forwardRef } from "react";
import { Button as BaseButton } from "primereact/button";
import { ButtonProps } from "./types";
import { Container } from "./styles";

/** botao */
export const Button = forwardRef<BaseButton, ButtonProps>((props, ref) => {
  const {
    id,
    text,
    outlined = false,
    rounded = false,
    disabled = false,
    className = "",
    style = {},
    type = "button",
    onClick,
    children,
    elementAttributes,
  } = props;

  const styledProps = {
    outlined,
    rounded,
    disabled,
  };

  const ButtonElement = (
    <Container {...styledProps}>
      <BaseButton
        id={id}
        style={style}
        className={className}
        {...elementAttributes}
        label={text}
        type={type}
        onClick={onClick}
        ref={ref}
        disabled={disabled}
      >
        {children}
      </BaseButton>
    </Container>
  );

  return ButtonElement;
});
