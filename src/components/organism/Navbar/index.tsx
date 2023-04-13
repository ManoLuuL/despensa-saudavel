import {
  NavLink,
  NavLinks,
  Search,
  SearchButton,
  SearchInput,
  StyledNav,
} from "./styles";

const Navbar = () => {
  return (
    <StyledNav>
      <Search>
        <SearchInput type="text" placeholder="Pesquisar" />
        <SearchButton>Pesquisar</SearchButton>
      </Search>
      <NavLinks>
        <NavLink href="#">Livro de Receitas</NavLink>
        <NavLink href="#">Receitas Favoritas</NavLink>
        <NavLink href="#">Dados do Usuário</NavLink>
      </NavLinks>
    </StyledNav>
  );
};
export default Navbar;
