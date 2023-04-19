import { FC } from "react";
import { CardProps } from "./types";

const Card: FC<CardProps> = ({ title, subtitle, header, footer, children }) => {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
