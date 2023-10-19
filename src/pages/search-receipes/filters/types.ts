import { SetStateAction } from "react";
import { ReceitasViewModel } from "../../../api/services";

export type FiltersListProps = {
  setReceipesData(value: SetStateAction<ReceitasViewModel[] | undefined>): void;
  setLoading(value: SetStateAction<boolean>): void;
};
