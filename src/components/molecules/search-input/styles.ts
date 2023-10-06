import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  position: relative;
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

export const SearchButton = styled.button`
  position: absolute;
  top: -15px;
  right: 0;
  bottom: 0;
  padding: 0 10px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RemoveSearchButton = styled.button`
  position: absolute;
  top: -15px;
  right: 35px !important;
  bottom: 0;
  padding: 0 10px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
