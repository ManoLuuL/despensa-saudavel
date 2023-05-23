import { DefaultElementProps } from "../../common/types";
import { ButtonProps } from "../../molecules/button/types";

import { ModalFooterProps } from "./footer";
import { ModalHeaderProps } from "./header";
import { ReactNode } from "react";

export type ModalWidth =
  | {
      mobile: string;
      default: string;
    }
  | string;

/**
 * Props de configuração dos buttons
 */
export type ButtonConfig = Omit<ButtonProps, "onClick">;

export type DefaultModalProps = {
  /**
   * Função executada ao fechar o modal
   */
  onHide?(): void;

  /**
   * Largura definida para o modal
   */
  width?: ModalWidth;

  /**
   * Altura definida para o modal
   */
  height?: string;

  /**
   * Desabilita todos os botões do modal
   */
  disableAllButtons?: boolean;
};

export type DefaultHeaderAndFooterProps = {
  /**
   * Função executada ao clicar sobre o botão de fechar ou cancelar ação
   */
  handleClose?(): void;
  /**
   * Desabilita os botões enquanto o modal carrega
   */
  isSubmitting: boolean;
  /**
   * Esconde o cabeçalho ou o rodapé do Modal
   */
  hide: boolean;
  /**
   * Desabilita todos os botões do modal
   */
  internalDisableAllButtons?: boolean;

  hasCloseFunction?: boolean;
};

export type ModalProps = DefaultModalProps &
  ModalHeaderProps &
  ModalFooterProps &
  DefaultElementProps & {
    /** Função disparada ao clicar no botão confirmar do modal */
    onConfirm?(): boolean | Promise<boolean>;

    /** Customiza o cabeçalho do modal */
    customHeader?: ReactNode;

    /* Customiza o rodapé do modal */
    customFooter?: ReactNode;

    /**
     * Esconde o rodapé do modal.
     * @default false
     * */
    hideFooter?: boolean;

    /**
     * Esconde o cabeçalho dao modal
     * @default false
     */
    hideHeader?: boolean;

    /**
     * Conteúdo do modal
     */
    children?: ReactNode;

    /**
     * Caso "true", todo o conteúdo do modal sera envolvido por um form e o botão se tornará do tipo "submit"
     */
    hasForm?: boolean;

    /**
     * Define se o modal seá fechado ao clicar fora ou não
     * @default false
     */
    closeOnOutsideClick?: boolean;
  };
