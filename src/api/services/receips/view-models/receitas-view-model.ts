type IngredientesReceita = {
  nome: string;
  quantidade: string;
  unidade_de_medida: string;
};

export type ReceitasViewModel = {
  id: number;
  nome: string;
  modo_de_preparo: string;
  ingredientes: IngredientesReceita[];
  diabetico: boolean;
  vegetariano: boolean;
  vegano: boolean;
  alergico_a_lactose: boolean;
  rendimento: string;
};
