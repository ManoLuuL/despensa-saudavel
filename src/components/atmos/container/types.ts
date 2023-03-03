import { ReactNode } from "react";
import { DefaultElementProps } from "../../common/types";

export type ContainerProps = DefaultElementProps & {
  header?: ReactNode;
  content?: ReactNode;
  contentConfiguration?: DefaultElementProps;
  footer?: ReactNode;

  children?: null;
};
