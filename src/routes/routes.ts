import { FC } from "react";
import { PageProps } from "../globals/use-get-module-items";
import LoginPage from "../pages/login/login-page";

export const RoutesComponents: { [key: string]: FC<PageProps> } = {
  "/login": LoginPage,
};
