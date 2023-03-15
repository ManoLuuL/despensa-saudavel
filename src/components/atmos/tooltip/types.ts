import { HTMLAttributes, ReactNode } from 'react';
import { DefaultElementProps } from '../../types';

export type TooltipProps = DefaultElementProps & {
  /** Elemento que ativa o Tooltip
   *  @default undefined
   */
  trigger: ReactNode;

  /** Conteudo do Tooltip
   * @default undefined
   */
  content: ReactNode;

  event?: 'hover' | 'click';

  /** Atribui um delay para o conteudo do Tooltip ser exibído (milissegundos) */
  delay?: number;

  elementAttributes?: HTMLAttributes<HTMLSpanElement>;
};
