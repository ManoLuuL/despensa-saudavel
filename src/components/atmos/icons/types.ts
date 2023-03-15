import { HTMLAttributes } from 'react';
import { DefaultElementProps } from '../../types';

export type IconWeightTypes = 'thinner' | 'thin' | 'normal' | 'bold' | 'bolder';

export type CommonIconProps = {
  /**
   * Tamanho do ícone.
   * Se for número, representa pixels.
   *
   * @example "0.8rem", "inherit", 10, "1vh"
   * @default "inherit"
   */
  size?: number | string;

  /**
   * Se ícone é preenchido ou não.
   * @default false
   */
  filled?: boolean;

  /**
   * Espessura da fonte.
   * @default normal
   */
  weight?: IconWeightTypes;
};

export type IconProps = CommonIconProps &
  DefaultElementProps & {
    /**
     * nome do ícone
     *
     * @required
     * @example "save", "home"
     */
    name: string;

    /**
     * Propriedades nativas do container do ícone (span)
     */
    elementAttributes?: HTMLAttributes<HTMLSpanElement>;
  };
