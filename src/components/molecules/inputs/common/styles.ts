import styled, { css } from "styled-components";
import {
  INPUT_ERROR_HEIGHT_IN_PIXELS,
  INPUT_PADDING_SIZE_IN_REM,
} from "./consts";
import { GetColorVariant, SlideDownAndFadeIn } from "../../../../styles";
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
            background-color: ${(p) => p.theme.required} !important;
            opacity: 1 !important;
          }
        `
      : ""}

  label {
    border-radius: ${(p) => p.theme.borderRadii.sm};
  }

  input::placeholder {
    opacity: 1 !important;
  }

  ${selector} {
    ${(p) => css<InputBoxStyleProps>`
      font-family: "Noto Sans", "sans-serif";
      font-size: 19px;

      width: 100%;
      padding: ${INPUT_PADDING_SIZE_IN_REM}rem ${p.padding}rem
        ${INPUT_PADDING_SIZE_IN_REM}rem 0.75rem;

      border: ${(p) => (p.readOnly ? "2px dashed" : "1px solid")}
        ${p.theme.surface.text};
      border-radius: ${p.theme.borderRadii.normal};

      transition: all 200ms;
      appearance: none;

      ${p.hasError
        ? css`
            border-color: ${p.theme.danger.color};

            :hover {
              border-color: ${p.theme.danger.hover};
            }

            :focus {
              box-shadow: 0 0 0 0.2rem ${GetColorVariant("danger", "100")};
              border-color: ${p.theme.danger.color};
            }
          `
        : ""}
    `}
  }
`;

export const DefaultInputError = styled.div`
  width: 100%;
  height: ${INPUT_ERROR_HEIGHT_IN_PIXELS}px;

  background: transparent;
  color: ${(p) => p.theme.danger.color};

  border: none;
  border-radius: ${(p) => p.theme.borderRadii.sm};

  font-size: ${(p) => p.theme.fontSizes.sm};
  font-weight: bold;

  text-align: left;

  animation: ${SlideDownAndFadeIn} 200ms ease-in-out forwards;
`;
