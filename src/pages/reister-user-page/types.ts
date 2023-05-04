export type DefaultItemSelect = {
  id: number;
  description: string;
};

export type LoginForm = {
  name: string;
  email: string;
  password: string;
  age: number;
  userSex: DefaultItemSelect;
};
