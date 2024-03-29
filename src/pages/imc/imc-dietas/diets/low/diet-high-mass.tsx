import { Divider } from "primereact/divider";
import { FC } from "react";

export const DietHighMass: FC = () => {
  return (
    <>
      <h3>Café da Manhã</h3>

      <p>Omelete com 3 ovos inteiros, espinafre e queijo.</p>
      <p>2 fatias de pão integral.</p>
      <p>1 porção de aveia com frutas (banana, morangos, etc.).</p>
      <p>1 copo de leite ou alternativa de leite vegetal.</p>

      <Divider />
      <h3>Lanche da manhã</h3>

      <p>1 porção de iogurte grego com nozes e mel.</p>
      <p>1 fruta (maçã, pera, etc.).</p>

      <Divider />
      <h3>Almoço</h3>

      <p>150g de peito de frango grelhado</p>
      <p>1 porção de arroz integral.</p>
      <p>1 porção de legumes cozidos no vapor (brócolis, cenoura, etc.).</p>
      <p>Salada com folhas verdes, tomate, pepino e azeite de oliva.</p>

      <Divider />
      <h3>Lanche da tarde</h3>

      <p>1 shake de proteína (whey protein) com leite ou água.</p>
      <p>1 pequena porção de pasta de amendoim.</p>
      <p>1 fatia de pão integral.</p>

      <Divider />
      <h3>Jantar</h3>

      <p>150g de salmão grelhado.</p>
      <p>1 porção de quinoa.</p>
      <p>Vegetais salteados em azeite de oliva.</p>
      <p>Salada com vegetais variados</p>

      <Divider />
    </>
  );
};
