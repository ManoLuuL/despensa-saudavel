import { ButtonProps, ButtonRef } from "./types";
import { Button as BaseButton } from "primereact/button";
import { Container } from "./styles";
import { forwardRef } from "react";
import { Icon, IconProps } from "../../atmos/icons";
import { Tooltip } from "../../atmos/tooltip";

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    id,
    tooltip,
    text,
    icon,
    color = "primary",
    iconPos = "left",
    outlined = false,
    rounded = false,
    loading = false,
    disabled = false,
    className = "",
    style = {},
    type = "button",
    loadingIconConfig,
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
    <Icon
      {...buttonIcon}
      {...loadingIconConfig}
      name="refresh"
      elementAttributes={{
        ...buttonIcon?.elementAttributes,
        ...loadingIconConfig?.elementAttributes,
        className: `rotate ${text ? iconSide : ""} ${
          loadingIconConfig?.elementAttributes?.className ||
          buttonIcon?.elementAttributes?.className ||
          ""
        }`,
      }}
    />
  ) : (
    !!buttonIcon && (
      <Icon
        {...buttonIcon}
        elementAttributes={{
          ...buttonIcon?.elementAttributes,
          className: `${text ? iconSide : ""} ${
            buttonIcon.elementAttributes || ""
          }`,
        }}
      />
    )
  );

  const styledProps = {
    color,
    outlined,
    rounded,
    disabled,
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
      >
        {children}
      </BaseButton>
    </Container>
  );

  return tooltip ? (
    <Tooltip trigger={ButtonElement} content={tooltip} />
  ) : (
    ButtonElement
  );
});
