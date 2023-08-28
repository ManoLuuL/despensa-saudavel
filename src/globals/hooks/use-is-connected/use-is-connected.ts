import { useMemo } from "react";

export const useIsConnected = () => {
  const connection = useMemo(() => {
    const local = localStorage.getItem("userData");

    if (local !== null) return JSON.parse(local);
    else return undefined;
  }, []);

  return {
    connection,
  };
};
