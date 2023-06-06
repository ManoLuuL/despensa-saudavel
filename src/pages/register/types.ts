export type DefaultItemSelect = {
  id: number;
  description: string;
};

export type RegisterForm = {
  registerName: string;
  email: string;
  password: string;
  age?: number;
  sex: DefaultItemSelect;
};
