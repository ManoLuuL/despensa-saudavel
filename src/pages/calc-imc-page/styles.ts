import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 100vh;
`;

export const ButtonWrapperMain = styled.div`
  margin-top: 2rem;
`;

export const IMCTableWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
`;

export const IMCTable = styled.table`
  border-collapse: collapse;
  text-align: center;

  th {
    background-color: #f2f2f2;
    color: black;
    font-weight: bold;
    padding: 1rem;
    border: 1px solid #ddd;
  }

  td {
    padding: 1rem;
    border: 1px solid #ddd;
  }
`;

export const ReceitasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 325px;
  border: 1px solid grey;
  height: 100vh;
  margin: 15px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
