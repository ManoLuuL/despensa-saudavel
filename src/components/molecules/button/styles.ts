import styled, { css } from "styled-components";
import { StyledButtonProps } from "./types";

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

    text-transform: uppercase;
    font-weight: 700;

    border: 2px solid black;

    ${(p) =>
      p.outlined
        ? css`
            color: black;
            background-color: transparent;
          `
        : css`
            color: black;
          `}

    transition: all 150ms ease-in-out;
  }

  .p-button:enabled:hover,
  .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-button:enabled:active,
  .p-button:not(button):not(a):not(.p-disabled):active,
  .p-button:active {
    ${(p) =>
      p.outlined
        ? css`
            color: black !important;
          `
        : css`
            color: black !important;

            border-color: black !important;
          `}
  }

  .p-button:focus:focus,
  .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-button:focus {
    ${(p) =>
      p.outlined
        ? css`
            color: black;
            background-color: transparent;
            outline: 2px solid black;
          `
        : css`
            outline: 2px solid black;
            color: black;
          `}
  }

  .p-button:disabled {
    opacity: 0.6;
    cursor: not-allowed !important; // sobrescreve o padrão do prime
    pointer-events: auto; // necessário para que o cursor funcione
    user-select: none;
    ${(p) =>
      p.outlined
        ? css`
            color: black !important;
            background-color: transparent !important;
          `
        : css`
            color: black !important;
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

export const Title = styled.p`
  font-size: 34px;
  color: green;
`;
