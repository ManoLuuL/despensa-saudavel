import { FC, useRef, useState } from "react";
import { TooltipProps } from "./types";
import { Provider, Portal, Arrow, Content, Root } from "./styles";
import { Trigger } from "@radix-ui/react-tooltip";
import { useOnClickOutside } from "../../../globals/use-on-click-outside";

export const Tooltip: FC<TooltipProps> = ({
  content,
  trigger,
  className,
  elementAttributes,
  style,
  id,
  event = "hover",
  delay = 300,
}) => {
  const [openTooltipConfig, setOpenTooltipConfig] = useState<{
    hover: boolean;
    click: boolean;
  }>({ hover: false, click: false });

  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([contentRef, triggerRef], () => {
    setOpenTooltipConfig((v) => ({ ...v, click: false }));
  });

  return (
    <Provider delayDuration={delay}>
      <Root open={openTooltipConfig.hover || openTooltipConfig.click}>
        <Trigger
          asChild
          ref={triggerRef}
          onMouseDown={() => {
            if (event === "click") {
              setOpenTooltipConfig((v) => ({ ...v, click: !v.click }));
            }
          }}
          onMouseEnter={() => {
            setOpenTooltipConfig((v) => ({ ...v, hover: true }));
          }}
          onMouseLeave={() => {
            setOpenTooltipConfig((v) => ({ ...v, hover: false }));
          }}
        >
          {trigger}
        </Trigger>
        <Portal>
          <Content
            id={id}
            className={className}
            style={style}
            ref={contentRef}
            {...elementAttributes}
            sideOffset={5}
          >
            {content}
            <Arrow />
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
};
