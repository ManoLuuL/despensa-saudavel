export type DefaultItemSelect = {
  id: number;
  description: string;
};

export type RegisterForm = {
  nome: string;
  email: string;
  senha: string;
  idade?: number;
  diabetico: boolean;
  vegetariano: boolean;
  vegano: boolean;
  alergico_a_lactose: boolean;
};
