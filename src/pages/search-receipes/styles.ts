import styled from "styled-components";

export const BntSearch = styled.button`
  border-radius: 0.5rem;
  border: 3px solid white;
  background-color: #48008f;
  padding: 5px 18px;
  color: white;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    background-color: white;
    color: black;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 325px;
  border: 1px solid grey;
  height: 100vh;
  margin: 15px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 16px;
  flex: 1;
`;
