import {
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu,
  TitlePageNavBar,
} from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <TitlePageNavBar>Teste</TitlePageNavBar>
      <NavMenu>
        <NavLink to="/main">Inicio</NavLink>
        <NavLink to="/ReceitasFavoritas">Receitas Favoritas</NavLink>
        <NavLink to="/Sobre">Sobre nós</NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/DadosUsuario">
          <span className="pi pi-user"></span>
        </NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
