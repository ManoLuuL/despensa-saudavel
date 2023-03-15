import styled from 'styled-components';
import { DefaultInputBoxStyles } from '../common/styles';
import { InputBoxStyleProps } from '../common/types';

export const Container = styled.span<InputBoxStyleProps>`
  ${DefaultInputBoxStyles('.p-inputtext')}

  input::-ms-reveal,
      input::-ms-clear {
    display: none;
  }
`;
