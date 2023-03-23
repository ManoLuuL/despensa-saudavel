import styled from 'styled-components';
import { DefaultInputBoxStyles } from '../common/styles';
import { InputBoxStyleProps } from '../common/types';

export const Container = styled.span<InputBoxStyleProps>`
  .p-inputnumber {
    width: 100%;
  }

  ${DefaultInputBoxStyles('.p-inputnumber-input')}

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
