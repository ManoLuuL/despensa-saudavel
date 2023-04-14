import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: grey;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  width: 20vw;
`;

export const SearchButton = styled.button`
  padding: 10px;
  border-radius: 0.5rem;
  border: 3px solid #8000ff;
  background-color: black;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  :hover {
    background-color: #8000ff;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;

  font-weight: bold;
  font-size: 1.1rem;

  &:hover {
    color: #4caf50;
  }
`;
