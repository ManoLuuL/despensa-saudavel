import React, { FC } from "react";
import { Content, Container as SContainer } from "./styles";
import { ContainerProps } from "./types";

export const Container: FC<ContainerProps> = (props) => {
  const {
    content,
    footer,
    header,
    contentConfiguration,
    ...elementAtributtes
  } = props;

  return (
    <SContainer {...elementAtributtes}>
      <Content {...contentConfiguration}>
        {!!header && header}
        {content}
      </Content>
      {!!footer && footer}
    </SContainer>
  );
};
