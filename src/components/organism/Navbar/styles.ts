import styled from "styled-components";

export const NavbarContainer = styled.div`
  background: #48008f;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const NavbarLeft = styled.button`
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none !important;
  border: none;
  background-color: transparent;
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonNav = styled.button`
  margin: 0 1rem;
  width: 150px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 3px solid white;
  background-color: #48008f;
  color: white;
  cursor: pointer;
  font-weight: bold;
  :hover {
    background-color: white;
    color: black;
  }
`;
