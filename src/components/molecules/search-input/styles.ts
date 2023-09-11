import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  margin-bottom: 20px;
`;

export const SearchResults = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SearchResultItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
`;
