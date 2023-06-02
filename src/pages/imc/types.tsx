import { Receitas } from "../../api/view-model/receitas-imc-view-model";

export type IMCResult = {
  value: number;
  label: string;
  color: string;
};

export type DietasIMC = {
  title: string;
  id: number;
  recipes: Receitas[];
};
