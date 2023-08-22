import styled from "styled-components";

interface ButtonProps {
  disabled?: boolean; // Include the disabled prop in the component's props
}

export const ButtonStyled = styled.button<ButtonProps>`
  margin: 0 1rem;
  width: 250px;
  padding: 0.75rem 1.5rem;
  font-size: 1.05rem;
  border-radius: 0.5rem;
  border: 3px solid #8000ff;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #8000ff;
  }

  /* Use a template literal to apply styles conditionally based on the disabled prop */
  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;
