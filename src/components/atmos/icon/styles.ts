import styled from 'styled-components';
import { IconWeights } from './consts';
import { CommonIconProps } from './types';

export const Container = styled.span<CommonIconProps>`
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: ${p =>
    p.size ? (typeof p.size === 'string' ? p.size : `${p.size}px`) : 'inherit'};
  display: inline-block;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  vertical-align: bottom;
  color: inherit;
  user-select: none;

  font-variation-settings: 'FILL' ${p => (p.filled ? 1 : 0)},
    'wght' ${p => IconWeights[p.weight!]}, 'GRAD' 200, 'opsz' 48;
`;

Container.defaultProps = {
  weight: 'normal',
  filled: false
};
