import { Divider } from "primereact/divider";
import { FC } from "react";

export const DietDetox: FC = () => {
  return (
    <>
      <p>
        A dieta detox não tem muita diferença de uma dieta saudável. Mas, para
        cumprir o objetivo de desintoxicar o corpo, é utilizado alimentos
        naturais e exclui os alimentos industrializados e aqueles com alto
        potencial alergênico, ou seja, laticínios, leite de soja, glúten,
        cereais refinados, açúcar, adoçantes, corantes, conservantes, café e
        álcool
      </p>
      <Divider />
      <h3>Café da Manhã</h3>
      <p>
        300ml de suco de abacaxi; 1 banana prata; Aveia em flocos (em cima da
        banana); 1 colher de sobremesa de mel (em cima da banana).
      </p>
      <Divider />

      <h3>Almoço</h3>
      <p>
        Salada verde a gosto (alface + agrião); 2 col (sopa) de arroz integral;
        1 prato de sobremesa de legumes refogados (abobrinha + vagem); Filé de
        frango ou pescada temperado com alecrim, salsinha e cebolinha; Suco de
        abacaxi ou maracujá natural.
      </p>
      <Divider />
      <h3>Lanche da tarde</h3>
      <p>
        1 xícara de chá de ervas ou 1 xícara de chá verde; 2 fatias de ricota ou
        2 fatias de queijo branco.
      </p>
      <Divider />
      <h3>Jantar</h3>
      <p>Sopa de legumes; 200ml de suco de limão ou caju.</p>
      <Divider />

      <h3>Lanche da noite</h3>
      <p>
        Diferente de algumas dietas, essa acompanha o lanche noturno para que a
        pessoa fique sempre bem nutrida mesmo seguindo a dieta.
      </p>
      <p>
        Pão light com fibra ou 2 torradas integrais; 1 polenguinho light ou 1
        colher de sobremesa de geleia; Chá de maçã.
      </p>
      <Divider />
    </>
  );
};
