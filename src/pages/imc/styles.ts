import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  align-items: baseline;
  overflow: hidden;
`;

export const IMCTableWrapper = styled.div`
  display: flex;
  justify-content: center;
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
  border-right: 1px solid grey;
  height: 90vh;
  margin: 15px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-right: 10rem;
`;
