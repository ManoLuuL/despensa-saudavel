export type ButtonProps = {
  content: string;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  onChange?(): void;
};

export type ButtonStyledProps = {
  disabled?: boolean;
};
