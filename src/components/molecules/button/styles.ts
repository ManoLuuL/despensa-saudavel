import styled, { keyframes } from "styled-components";

import { ButtonStyledProps } from "./types";

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
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
  display: flex;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: #8000ff;
  }
`;

export const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spinAnimation} 1s linear infinite;
`;
