import React from "react";
import styled from "styled-components";
import { Card as PrimeCard } from "primereact/card";

interface CardProps {
  title: string;
  description: string;
}

const CardWrapper = styled(PrimeCard)`
  margin: 16px;
`;

const Card: React.FC<CardProps> = ({ title, description }) => (
  <CardWrapper>
    <h2>{title}</h2>
    <p>{description}</p>
  </CardWrapper>
);

export default Card;
