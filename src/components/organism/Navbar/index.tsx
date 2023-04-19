import { NavLink } from "react-router-dom";
import { Button } from "../../molecules/button";
import { NavbarContainer, NavbarLeft, NavbarRight } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to={"/main"}>
        <NavbarLeft>Cardapio Nutricional</NavbarLeft>
      </NavLink>
      <NavbarRight>
        <NavLink to={"/"}>
          <Button content="Dados do Usuario" fontSize={0.9} />
        </NavLink>
      </NavbarRight>
    </NavbarContainer>
  );
};
export default Navbar;
