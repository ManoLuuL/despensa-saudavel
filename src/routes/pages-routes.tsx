import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import ErrorPage from "../pages/page-404";
import LoginPage from "../pages/login/login-page";
import RegisterPage from "../pages/reister-user-page/register-page";
import MainPage from "../pages/main-page";
import CalcIMC from "../pages/calc-imc-page";
import RecipeSearch from "../pages/buscar-receitas-page";

export const pagesRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Login",
    element: <LoginPage />,
  },
  {
    path: "Registrar",
    element: <RegisterPage />,
  },
  {
    path: "Main",
    element: <MainPage />,
  },
  {
    path: "CalcularIMC",
    element: <CalcIMC />,
  },
  { path: "BuscarReceitas", element: <RecipeSearch /> },
]);
