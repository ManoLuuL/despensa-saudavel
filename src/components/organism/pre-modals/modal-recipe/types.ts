import { DefaultModalProps } from "../../modal";
import { Receitas } from "../../../../api/view-model/receitas-imc-view-model";
import { ReceitasViewModel } from "../../../../api/services";

export type RecipesModalProps = DefaultModalProps & {
  recipes?: ReceitasViewModel;
  recipesMock?: Receitas;
  showFavoriteButton?: boolean;
  showRestrictions?: boolean;
};
