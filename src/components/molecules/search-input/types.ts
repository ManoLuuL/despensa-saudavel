import { SetStateAction } from "react";
import { ReceitasViewModel } from "../../../api/services";

export type SearchInputProps = {
  setReceipesData: (
    value: SetStateAction<ReceitasViewModel[] | undefined>
  ) => void;
  data: ReceitasViewModel[] | [];
};
