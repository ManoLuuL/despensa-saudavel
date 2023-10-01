import { Restricoes } from "./types";

export const getRestricoes = () => {
  const dataRestricoes: Restricoes[] = [
    {
      id: 1,
      description: "Diabetico",
    },
    {
      id: 2,
      description: "Alérgico a Lactose",
    },
    {
      id: 3,
      description: "Vegetariano",
    },
    {
      id: 4,
      description: "Vegano",
    },
  ];

  return { dataRestricoes };
};
