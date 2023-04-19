import { FC } from "react";
import { CardProps } from "./types";
import {
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
  CardWrapper,
} from "./styles";

const Card: FC<CardProps> = ({ title, subtitle, header, footer, children }) => {
  return (
    <CardWrapper>
      {header && <CardHeader>{header}</CardHeader>}
      <div className="card-body">
        <CardTitle>{title}</CardTitle>
        {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
        {children}
      </div>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardWrapper>
  );
};

export default Card;
