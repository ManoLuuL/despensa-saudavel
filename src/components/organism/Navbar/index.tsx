import { NavLink } from "react-router-dom";
import { Button } from "../../molecules/button";
import {
  NavLinks,
  Search,
  SearchButton,
  SearchInput,
  StyledNav,
} from "./styles";

const Navbar = () => {
  return (
    <StyledNav>
      <NavLinks>
        <NavLink to={"/"}>
          <Button content="Livro de Receitas" fontSize={1} />
        </NavLink>
        <NavLink to={"/"}>
          <Button content="Receitas Favoritas" fontSize={1} />
        </NavLink>
      </NavLinks>
      <Search>
        <SearchInput type="text" placeholder="Pesquisar" />
        <SearchButton>Pesquisar</SearchButton>
      </Search>
      <NavLinks>
        <NavLink to={"/"}>
          <Button content="Dados do Usuário" fontSize={1} />
        </NavLink>
      </NavLinks>
    </StyledNav>
  );
};
export default Navbar;
