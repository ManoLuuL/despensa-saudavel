import styled from "styled-components";

export const IMCCalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: 576px) {
    margin-top: 4rem;
  }
`;
