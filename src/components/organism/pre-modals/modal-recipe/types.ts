import { Receitas } from "../../../../api/view-model/receitas-imc-view-model";
import { DefaultModalProps } from "../../modal";

export type RecipesModalProps = DefaultModalProps & {
  recipes: Receitas | undefined;
};