import { FC } from "react";
import { PageProps } from "../globals/use-get-module-items";
import LoginPage from "../pages/Login/login-page";

export const RoutesComponents: { [key: string]: FC<PageProps> } = {
  "/login": LoginPage,
};
