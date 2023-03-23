import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DefaultElementProps } from '../../types';

export type StepperHtmlAttributes = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'onSelect' | 'ref'
>;

export type StepperProps = DefaultElementProps & {
  /**
   *  Array contendo os títulos(passos) do stepper.
   * @default undefined
   */
  steps: string[];
  /**
   * Índice do item ativo, contando sempre a partir do 0.
   * @default undefined
   */
  currentStep: number;

  /** Define as propriedades HTML.
   * @default undefined
   */
  elementAttributes?: StepperHtmlAttributes;
};
