import {
  BUTTON_HEIGHTS,
  BUTTON_PADDINGS,
  ICON_BUTTON_PADDING_IN_PIXELS,
} from "./consts";
import styled, { css, keyframes } from "styled-components";

import { Colors } from "../../../styles";
import { StyledButtonProps } from "./types";

const textColorCss = css<{ color?: Colors }>`
  ${(p) => (p.color === "contrast" ? p.theme.contrast.text : p.theme.textColor)}
`;

// como o hover é igual para ambas as variações do botão e é usado em mais de um lugar, essa abstração foi feita
const hoverButtonCSS = css<StyledButtonProps>`
  ${(p) =>
    p.iconButton
      ? css`
          color: ${p.theme[p.color!].hover};
          background-color: rgba(0, 0, 0, 0.08);
        `
      : css`
          color: ${textColorCss};

          border-color: ${p.theme[p.color!].hover};
          background-color: ${p.theme[p.color!].hover};
        `}
`;

export const Container = styled.div<StyledButtonProps>`
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

    font-size: ${(p) => p.theme.fontSizes.md};
    text-transform: uppercase;
    font-weight: 700;

    transition: all 150ms ease !important;

    ${(p) =>
      p.outlined
        ? css`
            color: ${p.theme[p.color!].color};
            background-color: transparent;
          `
        : css`
            color: ${textColorCss};
            background-color: ${p.theme[p.color!].color};
          `}

    ${(p) =>
      p.iconButton
        ? css`
            color: ${p.theme[p.color!].color};
            background-color: transparent;
          `
        : css`
            border: 1px solid ${p.theme[p.color!].color};
          `}

          border-radius: ${(p) =>
      p.rounded ? p.theme.borderRadii.xl : p.theme.borderRadii.md};
  }

  .p-button:enabled:hover,
  .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-button:hover {
    ${hoverButtonCSS}
  }

  .p-button:enabled:active,
  .p-button:not(button):not(a):not(.p-disabled):active,
  .p-button:active {
    ${(p) =>
      p.outlined
        ? css`
            color: ${textColorCss} !important;
            background-color: ${p.theme[p.color!].active} !important;
          `
        : css`
            color: ${textColorCss} !important;

            border-color: ${p.theme[p.color!].active} !important;
            background-color: ${p.theme[p.color!].active} !important;
          `}

    ${(p) =>
      p.iconButton
        ? css`
            color: ${p.theme[p.color!].hover} !important;
            background-color: rgba(0, 0, 0, 0.1) !important;
          `
        : ""}
  }

  .p-button:focus:focus,
  .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-button:focus {
    ${(p) =>
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
            color: ${textColorCss};
            background-color: ${p.theme[p.color!].color};

            :hover {
              ${hoverButtonCSS}
            }
          `}

    ${(p) =>
      p.iconButton
        ? css`
            color: ${p.theme[p.color!].hover} !important;
            background-color: rgba(0, 0, 0, 0.1) !important;

            :hover {
              ${hoverButtonCSS}
            }
          `
        : ""}
  }

  .p-button:disabled {
    opacity: 0.6;
    cursor: not-allowed !important; // sobrescreve o padrão do prime
    pointer-events: auto; // necessário para que o cursor funcione
    user-select: none;
    ${(p) =>
      p.outlined
        ? css`
            color: ${p.theme[p.color!].color} !important;
            background-color: transparent !important;
          `
        : css`
            color: ${textColorCss} !important;
            background-color: ${p.theme[p.color!].color} !important;
          `}
  }

  .p-button.p-button-icon-only {
    padding: ${ICON_BUTTON_PADDING_IN_PIXELS}px 0;
    width: ${(p) => BUTTON_HEIGHTS[p.size!]};
  }

  .p-button {
    padding: ${(p) => BUTTON_PADDINGS[p.size!]};
    height: ${(p) => BUTTON_HEIGHTS[p.size!]};
  }

  .icon-left {
    margin-right: 4px;
    order: 1;
  }

  .p-button-label {
    order: 2;
    transition: all 0ms ease !important;
  }

  .icon-right {
    margin-left: 4px;
    order: 3;
  }
`;

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spinAnimation} 1s linear infinite;
  margin-right: 5px;
`;
