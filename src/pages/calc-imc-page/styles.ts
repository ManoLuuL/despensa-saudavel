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

export const IMCChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapperMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4rem;

  label {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

export const ButtonWrapperMain = styled.div`
  margin-top: 2rem;
`;

export const IMCTableWrapper = styled.div`
  margin-top: 4rem;
`;

export const IMCTable = styled.table`
  border-collapse: collapse;
  text-align: center;

  th {
    background-color: #f2f2f2;
    font-weight: bold;
    padding: 1rem;
    border: 1px solid #ddd;
  }

  td {
    padding: 1rem;
    border: 1px solid #ddd;
  }
`;
