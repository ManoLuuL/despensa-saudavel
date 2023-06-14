import { Restricoes } from "./types";

export const getRestricoes = () => {
  const restri: Restricoes[] = [
    {
      id: 1,
      description: "Diabetico",
    },
    {
      id: 2,
      description: "Intolerantes ou Alérgicos à lactose",
    },
  ];

  return restri;
};
