import { ButtonProps, ButtonRef } from "./types";
import { Container, Loader } from "./styles";
import { Icon, IconProps } from "../../atmos/icon";

import { Button as BaseButton } from "primereact/button";
import { forwardRef } from "react";

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    id,
    text,
    icon,
    color = "primary",
    iconPos = "left",
    outlined = false,
    rounded = false,
    loading = false,
    disabled = false,
    iconButton = false,
    size = "default",
    className = "",
    style = {},
    type = "button",
    onClick,
    children,
    elementAttributes,
    containerAttributes,
  } = props;

  let buttonIcon: IconProps | undefined;
  if (typeof icon === "string") buttonIcon = { name: icon, filled: true };
  else buttonIcon = icon;

  const iconSide = `icon-${iconPos}`;

  const ButtonIcon = loading ? (
    <Loader />
  ) : (
    !!buttonIcon && (
      <Icon
        {...buttonIcon}
        className={`${text ? iconSide : ""} ${buttonIcon.className || ""}`}
      />
    )
  );

  const styledProps = {
    color,
    outlined,
    rounded,
    disabled,
    size,
    iconButton,
  };

  const ButtonElement = (
    <Container {...containerAttributes} {...styledProps}>
      <BaseButton
        id={id}
        style={style}
        className={className}
        {...elementAttributes}
        label={text}
        icon={ButtonIcon}
        type={type}
        onClick={onClick}
        ref={ref}
        disabled={disabled}
        loading={loading}
      >
        {children}
      </BaseButton>
    </Container>
  );

  return ButtonElement;
});
