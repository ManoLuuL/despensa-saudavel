import styled from "styled-components";

export const NavbarContainer = styled.div`
  background: url("sua-imagem-de-fundo-com-opacidade.jpg") center center/cover
    no-repeat;
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
