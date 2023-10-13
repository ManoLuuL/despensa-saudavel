import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #48008f;
  height: 50px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TitlePageNavBar = styled.span`
  font-size: 2rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;
