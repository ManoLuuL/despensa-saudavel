import { ButtonConfig, DefaultHeaderAndFooterProps } from '../types';

export type CommonModalFooterProps = {
  /**
   * Configura o botão de confirmar.
   */
  confirmButtonConfig?: ButtonConfig;

  /**
   * Configura o botão cancelar.
   */
  cancelButtonConfig?: ButtonConfig;
};

/**
 * Props do componente de Footer
 */
export type InternalModalFooterProps = CommonModalFooterProps &
  DefaultHeaderAndFooterProps & {
    /**
     * Função executada ao clicar sobre o botão de confirmar
     */
    handleConfirm(): Promise<void>;
    /**
     * Caso hasForm seja "true", o formId deverá ser informado para o botão.
     */
    formId?: string;

    /**
     * Proprieade que siniliza "true" caso haja uma função atribuída ao onConfirm
     */
    hasConfirmFunction?: boolean;
  };

/**
 * Props relacionadas ao footer que serão utilizadas no modal
 */
export type ModalFooterProps = CommonModalFooterProps;
