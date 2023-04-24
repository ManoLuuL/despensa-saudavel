import { useCallback, useState } from "react";

const useNavigation = () => {
  const [route, setRoute] = useState("Main");

  const selectAction = useCallback(
    (option: string) => {
      if (route === option) return;
      setRoute(option);
    },
    [route]
  );

  return { currentRoute: route, setCurrentRoute: selectAction };
};

export default useNavigation;
