type Ingredientes = {
  ingrediente: string;
  quantidade: string;
};

type Receitas = {
  titulo: string;
  ingredientes: Ingredientes[];
  modo_preparo: string;
  rendimento: string;
};

export type ReceitasIMCViewModel = {
  receitas: Receitas[];
};
