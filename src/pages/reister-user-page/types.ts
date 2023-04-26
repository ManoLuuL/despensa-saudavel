export type DefaultItemSelect = {
  id: number;
  description: string;
};

export type LoginForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userSex: DefaultItemSelect;
};
