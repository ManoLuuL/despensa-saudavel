import styled, { css } from "styled-components";
import {
  INPUT_ERROR_HEIGHT_IN_PIXELS,
  INPUT_PADDING_SIZE_IN_REM,
} from "./consts";
import { InputBoxStyleProps } from "./types";

// como a maioria dos InputBox tem o mesmo estilo, essa abstração foi feita
export const DefaultInputBoxStyles = (
  selector: string
) => css<InputBoxStyleProps>`
  position: relative;
  width: 100%;
  margin-bottom: ${(p) =>
    p.ignoreErrorMargin
      ? "unset"
      : p.hasError
      ? "unset"
      : INPUT_ERROR_HEIGHT_IN_PIXELS + "px"};

  ${(p) =>
    p.required
      ? css`
          ${selector}, label {
            // background-color: ${(p) => p.theme.required} !important;
            opacity: 1 !important;
          }
        `
      : ""}

  input::placeholder {
    opacity: 1 !important;
  }

  ${selector} {
    ${(p) => css<InputBoxStyleProps>`
      font-family: "Noto Sans", "sans-serif";

      width: 100%;
      padding: ${INPUT_PADDING_SIZE_IN_REM}rem ${p.padding}rem
        ${INPUT_PADDING_SIZE_IN_REM}rem 0.75rem;

      border: ${(p) => (p.readOnly ? "2px dashed" : "1px solid")}
     

      transition: all 200ms;
      appearance: none;

      ${
        p.hasError
          ? css`
              border-color: ${p.theme.danger.color};
            `
          : ""
      }
    `}
  }
`;

export const DefaultInputError = styled.div`
  width: 100%;
  height: ${INPUT_ERROR_HEIGHT_IN_PIXELS}px;

  background: transparent;
  color: ${(p) => p.theme.danger.color};

  border: none;

  font-weight: bold;

  text-align: left;
`;
