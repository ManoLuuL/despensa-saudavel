import { useCallback } from "react";
import useNavigation from "../../../utils/use-navigation";
import navigationData from "../../../utils/navigation";
import { Icon, TabbarContainer } from "./styles";

const Tabbar = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();

  const getTabIcon = useCallback((item: string) => {
    switch (item) {
      case "Home":
        return "Teste";
      case "Discover":
        return "Teste1";
      case "Store":
        return "Teste2";
      case "Inbox":
        return "Teste3";
      case "Profile":
        return "Teste4";
    }
  }, []);

  return (
    <TabbarContainer>
      {navigationData.map((item, index) => (
        <span
          key={index}
          className={currentRoute === item ? "tabItemActive" : "TabItem"}
          onClick={() => setCurrentRoute(item)}
        >
          <Icon>{getTabIcon(item)}</Icon>
        </span>
      ))}
    </TabbarContainer>
  );
};

export default Tabbar;
