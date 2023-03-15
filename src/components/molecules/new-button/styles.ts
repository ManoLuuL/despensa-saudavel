import styled, { css } from 'styled-components';
import { StyledButtonProps } from './types';

// como o hover é igual para ambas as variações do botão e é usado em mais de um lugar, essa abstração foi feita
const hoverButtonCSS = css<StyledButtonProps>`
  color: ${p => p.theme[p.color!].text};

  border-color: ${p => p.theme[p.color!].hover};
  background-color: ${p => p.theme[p.color!].hover};
`;

export const Container = styled.span<StyledButtonProps>`
  .p-button,
  .p-button.p-button-icon-only {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;

    font-size: ${p => p.theme.fontSizes.normal};
    text-transform: uppercase;
    font-weight: 700;

    border: 2px solid ${p => p.theme[p.color!].color};
    border-radius: ${p => (p.rounded ? '50%' : p.theme.borderRadii.normal)};

    ${p =>
      p.outlined
        ? css`
            color: ${p.theme[p.color!].color};
            background-color: transparent;
          `
        : css`
            color: ${p.theme[p.color!].text};
            background-color: ${p.theme[p.color!].color};
          `}

    transition: all 150ms ease-in-out;
  }

  .p-button:enabled:hover,
  .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-button:hover {
    ${hoverButtonCSS}
  }

  .p-button:enabled:active,
  .p-button:not(button):not(a):not(.p-disabled):active,
  .p-button:active {
    ${p =>
      p.outlined
        ? css`
            color: ${p.theme[p.color!].text} !important;
            background-color: ${p.theme[p.color!].active} !important;
          `
        : css`
            color: ${p.theme[p.color!].text} !important;

            border-color: ${p.theme[p.color!].active} !important;
            background-color: ${p.theme[p.color!].active} !important;
          `}
  }

  .p-button:focus:focus,
  .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-button:focus {
    ${p =>
      p.outlined
        ? css`
            color: ${p.theme[p.color!].color};
            background-color: transparent;
            outline: 2px solid black;

            :hover {
              ${hoverButtonCSS}
            }
          `
        : css`
            outline: 2px solid black;
            color: ${p.theme[p.color!].text};
            background-color: ${p.theme[p.color!].color};

            :hover {
              ${hoverButtonCSS}
            }
          `}
  }

  .p-button:disabled {
    opacity: 0.6;
    cursor: not-allowed !important; // sobrescreve o padrão do prime
    pointer-events: auto; // necessário para que o cursor funcione
    user-select: none;
    ${p =>
      p.outlined
        ? css`
            color: ${p.theme[p.color!].color} !important;
            background-color: transparent !important;
          `
        : css`
            color: ${p.theme[p.color!].text} !important;
            background-color: ${p.theme[p.color!].color} !important;
          `}
  }

  .p-button.p-button-icon-only {
    padding: 4px 0;
    width: 30px;
  }

  .p-button {
    padding: 4px 14px;
  }

  .icon-left {
    margin-right: 4px;
    order: 1;
  }

  .p-button-label {
    order: 2;
  }

  .icon-right {
    margin-left: 4px;
    order: 3;
  }
`;
