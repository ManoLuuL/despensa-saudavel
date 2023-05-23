import { ReactNode } from 'react';
import { ButtonConfig, DefaultHeaderAndFooterProps } from '../types';

/**
 * Props relacionadas ao header que serão utilizadas no modal
 */
export type ModalHeaderProps = {
  /**
   * Título do modal
   */
  title?: ReactNode;

  /**
   * Configurações do botão de fechar
   */
  closeButtonConfig?: ButtonConfig;
};

/**
 * Props do componente de Header
 */
export type InternalModalHeaderProps = ModalHeaderProps &
  DefaultHeaderAndFooterProps;
