import { Divider } from "primereact/divider";
import { FC } from "react";

export const DietOther: FC = () => {
  return (
    <>
      <h3>Café da Manhã</h3>

      <p>Omelete com 4 ovos inteiros, espinafre, cogumelos e queijo.</p>
      <p>2 fatias de pão integral.</p>
      <p>1 porção de aveia com frutas (banana, morangos, mirtilos).</p>
      <p>1 copo de leite ou alternativa de leite vegetal.</p>
      <p>1 copo de leite com whey(para reforço dos nutrientes)</p>

      <Divider />
      <h3>Lanche da manhã</h3>

      <p>1 porção de iogurte grego com nozes e mel.</p>
      <p>1 fruta (maçã, pera, etc.).</p>
      <p>1 porção de mix de castanhas e frutas secas.</p>

      <Divider />
      <h3>Almoço</h3>

      <p>250g de peito de frango grelhado.</p>
      <p>1 porção generosa de arroz integral.</p>
      <p>1 porção de feijão preto.</p>
      <p>Salada com folhas verdes, tomate, pepino e azeite de oliva.</p>

      <Divider />
      <h3>Lanche da tarde</h3>

      <p>1 shake de proteína (whey protein) com leite ou água.</p>
      <p>2 fatias de pão integral com pasta de amendoim.</p>
      <p>1 iogurte grego com frutas vermelhas e granola.</p>

      <Divider />
      <h3>Jantar</h3>

      <p>250g de salmão grelhado.</p>
      <p>1 porção de quinoa.</p>
      <p>Vegetais salteados em azeite de oliva.</p>
      <p>Salada com vegetais variados</p>

      <Divider />
      <h3>Ceia</h3>

      <p>1 porção de queijo cottage ou iogurte natural.</p>

      <Divider />
    </>
  );
};
