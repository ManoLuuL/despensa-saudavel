import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
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
`;

export const SearchButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #4caf50;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  margin-right: 20px;
  font-weight: bold;
  font-size: 1.1rem;

  &:hover {
    color: #4caf50;
  }
`;
