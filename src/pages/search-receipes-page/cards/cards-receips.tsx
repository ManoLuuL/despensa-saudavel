import { FC } from "react";
import { CardProps } from "./types";
import { CardWrapper } from "./styles";

const Card: FC<CardProps> = (props) => {
  const { description, title } = props;

  return (
    <CardWrapper>
      <h2>{title}</h2>
      <p>{description}</p>
    </CardWrapper>
  );
};

export default Card;
