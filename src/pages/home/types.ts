export type ReceitaViewModel = {
  _id: {
    $oid: string;
  };
  nome: string;
  secao: {
    nome: string;
    conteudo: string[];
  }[];
};
