import { Receitas } from "../../../api/view-model/receitas-imc-view-model";
import { DefaultModalProps } from "../../../components/organism/modal";

export type RecipesModalProps = DefaultModalProps & {
  recipes: Receitas | undefined;
};
