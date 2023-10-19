import styled from "styled-components";

export const FilterContent = styled.div`
  width: 200px;
  height: 100vh;
`;

export const FiltersTitle = styled.h2`
  margin-bottom: 16px;
  text-align: center;
`;

export const FiltersList = styled.div`
  margin-top: 16px;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 310px;
  height: 90%;
  margin: 15px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 5px;
`;

export const FilterContainer = styled.div`
  border-right: 1px solid grey;
`;
