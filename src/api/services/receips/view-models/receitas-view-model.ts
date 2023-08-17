type IngredientesReceita = {
  nome: string;
  quantidade: string;
};

export type ReceitasViewModel = {
  id: number;
  nome: string;
  descricao: string;
  modo_de_preparo: string;
  ingredientes: IngredientesReceita[];
};
