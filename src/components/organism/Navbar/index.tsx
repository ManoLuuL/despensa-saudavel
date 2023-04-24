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
        <NavLink to="/contact-us">Receitas Favoritas</NavLink>
        <NavLink to="/sign-up">Sobre nós</NavLink>
        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin">
          <span className="pi pi-user"></span>
        </NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
