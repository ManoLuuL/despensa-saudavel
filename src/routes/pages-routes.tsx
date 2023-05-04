import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page";
import ErrorPage from "../pages/page-404";
import LoginPage from "../pages/login/login-page";
import RegisterPage from "../pages/register-user-page/register-page";
import MainPage from "../pages/main-page";
import CalcIMC from "../pages/calc-imc-page";
import RecipeSearch from "../pages/search-receipes-page";
import FavoriteRecipe from "../pages/favorite-recipe";
import UserPage from "../pages/user-page";
import AboutPage from "../pages/about-page";

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
  { path: "ReceitasFavoritas", element: <FavoriteRecipe /> },
  { path: "DadosUsuario", element: <UserPage /> },
  { path: "Sobre", element: <AboutPage /> },
]);
