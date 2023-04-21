import { NavLink } from "react-router-dom";
import { Button } from "../../molecules/button";
import { ButtonNav, NavbarContainer, NavbarLeft, NavbarRight } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to={"/main"}>
        <NavbarLeft>Cardapio Nutricional</NavbarLeft>
      </NavLink>
      <NavbarRight>
        <NavLink to={"/"}>
          <ButtonNav>Dados do Usuario</ButtonNav>
        </NavLink>
      </NavbarRight>
    </NavbarContainer>
  );
};
export default Navbar;
