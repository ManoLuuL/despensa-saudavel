import { ReactNode } from "react";

export type CardProps = {
  title: string;
  subtitle?: string;
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
};
