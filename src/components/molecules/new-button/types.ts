import { HTMLAttributes, MouseEvent, ReactNode } from "react";
import { Button as BaseButton } from "primereact/button";
import { Colors } from "../../../styles/types";
import { DefaultElementProps } from "../../types";
import { IconProps } from "../../atmos/icons";

// since button already has 'color' prop from raw html, needs to be omitted
// so custom 'color' prop works
type OmittedAttrs = {
  color?: unknown;
};
export type ButtonHtmlAttributes = Omit<
  HTMLAttributes<HTMLButtonElement> & { form?: string },
  keyof OmittedAttrs
>;

export type ButtonRef = BaseButton;

// props compartilhadas entre botões e estilos de botões
type CommonProps = {
  /** Define a cor do botão
   * @default primary
   */
  color?: Colors;

  /** Define bordas arredondadas ao botão
   * @default false
   */
  rounded?: boolean;

  /** Define o efeito de contorno no botão, invertendo a cor de fundo com a de borda
   * @default false
   */
  outlined?: boolean;

  /** Define o estado de desabilitado ao botão
   * @default false
   */
  disabled?: boolean;
};

// posição do ícone no botão
type IconPos = "left" | "right";

export type StyledButtonProps = CommonProps;

export type ButtonProps = CommonProps &
  DefaultElementProps & {
    /** Define o identificador do botão
     * @default undefined
     * @important Recomendado sempe fornecer um id
     */
    id?: string;

    /** Define o texto do tooltip
     * @default undefined
     * @important Recomendado sempe fornecer um tooltip
     */
    tooltip?: string;

    /** Define o texto do botão
     * @default undefined
     */
    text?: string;

    /** Define o tipo do botão
     * @default button
     */
    type?: "button" | "submit";

    /** Define o icone do botão, quando `string` a propriedade define o icone diretamente, quando `IconProps` configura o icone
     * @default undefined
     */
    icon?: IconProps | string;

    /** Define a posição do icone no botão */
    iconPos?: IconPos;

    /** Propriedade que ao acionada exibe um icone rodando a esquerda do texto do botão
     * @default false
     */
    loading?: boolean;

    /** Configura o icone que aparece no modo loading
     * @default undefined
     */
    loadingIconConfig?: IconProps;

    /** Fornece uma função que é chamada quando o botão é clicado
     * @default () => {}
     */
    onClick?(event: MouseEvent): void;

    /** Define as propriedades HTML do botão
     * @default undefined
     */
    elementAttributes?: ButtonHtmlAttributes;

    /** Define um componente filho ao botão
     * @default undefined
     */
    children?: ReactNode;

    containerAttributes?: HTMLAttributes<HTMLSpanElement>;
  };
