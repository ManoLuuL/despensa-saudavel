import { FC } from "react";
import { Actions, Logo, NavContainer, NavItems } from "./styles";
import { NavBarProps } from "./types";

const Navbar: FC<NavBarProps> = (props) => {
  const { currentRoute, setCurrentRoute, navigationData } = props;

  return (
    <NavContainer>
      <Logo>Teste</Logo>
      <NavItems>
        {navigationData.map((item, index) => (
          <li
            className={currentRoute === item ? ".selectedNavItem" : ".navItem"}
            key={index}
            onClick={() => setCurrentRoute(item)}
          >
            {item}
          </li>
        ))}
      </NavItems>
      <Actions>Logout</Actions>
    </NavContainer>
  );
};

export default Navbar;
