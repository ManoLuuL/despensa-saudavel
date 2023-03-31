import styled from "styled-components";
export const ButtonStyled = styled.button<{
  fontSize?: number;
}>`
  margin: 0 1rem;
  width: 250px;
  padding: 0.75rem 1.5rem;
  font-size: ${(p) => (p.fontSize ? `${p.fontSize}rem` : "1.25rem")};
  border-radius: 0.5rem;
  border: 3px solid #8000ff;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: bold;
  :hover {
    background-color: #8000ff;
  }
`;
