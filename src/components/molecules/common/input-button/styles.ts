import styled from 'styled-components';
import { INPUT_BUTTONS_GAP_IN_REM } from '../consts';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;

  transform: translateY(-50%);

  width: max-content;
  height: 100%;

  display: flex;
  align-items: center;
  gap: ${INPUT_BUTTONS_GAP_IN_REM}rem;
`;
