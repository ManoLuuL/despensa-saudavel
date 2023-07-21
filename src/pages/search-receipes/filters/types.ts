import { Receitas } from "../../../api/view-model/receitas-imc-view-model";

export type FiltersListProps = {
  setNewReceips(data: Receitas[]): void;
};

export type Restricoes = {
  id: number;
  description: string;
};
