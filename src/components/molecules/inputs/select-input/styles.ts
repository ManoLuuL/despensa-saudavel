import styled from 'styled-components';
import { DefaultInputBoxStyles } from '../common/styles';
import { StyledSelectProps } from './types';

export const Container = styled.span<StyledSelectProps>`
  ${DefaultInputBoxStyles('.p-dropdown')}

  .p-dropdown-label.p-inputtext:not(.p-dropdown-label-empty) {
    padding: 0;
  }

  .p-dropdown.p-component.p-inputwrapper.undefined:not(.items)
    > .p-dropdown-label.p-inputtext.p-dropdown-label-empty:not(.items) {
    padding: 0;
  }

  .p-dropdown.p-component.p-inputwrapper.undefined.items
    > .p-dropdown-label.p-inputtext.p-dropdown-label-empty {
    // padding calculado com base na diferença entre os tamanhos do input com itens e sem itens
    //(padrão era de 0.75rem ou 12px, e era necessário remover 4.8px da altura do input, por consequencia foi removido 2.4px do top e do bottom)
    padding: 9.6px 12px;
  }

  .p-hidden-accessible.p-dropdown-hidden-select {
    padding: 0;
  }

  .p-dropdown-trigger {
    display: none;
  }
`;
