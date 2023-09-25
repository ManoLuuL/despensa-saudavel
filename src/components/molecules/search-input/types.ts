import { ChangeEvent } from "react";

export type SearchInputProps = {
  onChange(searchValue: ChangeEvent<HTMLInputElement>): void;
};
