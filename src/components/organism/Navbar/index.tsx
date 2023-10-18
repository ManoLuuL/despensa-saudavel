import { useNavigate } from "react-router-dom";
import { Nav, NavBtn, NavLink, NavMenu, TitlePageNavBar } from "./styles";
import { SplitButton } from "primereact/splitbutton";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Nav>
      <TitlePageNavBar>Despensa Saudável</TitlePageNavBar>
      <NavMenu>
        <NavLink to="/Home">Inicio</NavLink>
        <NavLink to="/CalcularIMC">IMC</NavLink>
        <NavLink to="/BuscarReceitas">Receitas</NavLink>
        <NavLink to="/ReceitasFavoritas">Receitas Favoritas</NavLink>
        <NavLink to="/Sobre">Sobre nós</NavLink>
      </NavMenu>
      <NavBtn>
        <SplitButton
          label=""
          icon="pi pi-user"
          model={[
            {
              label: "Logoff",
              icon: "pi pi-power-off",
              command: () => {
                localStorage.clear();
                navigate("/");
              },
            },
          ]}
          text
          onClick={() => navigate("/DadosUsuario")}
        />
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
