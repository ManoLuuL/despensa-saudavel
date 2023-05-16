import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ErrorPage from "../pages/404";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import FavoriteRecipe from "../pages/favorite-recipe";
import UserPage from "../pages/user";
import AboutPage from "../pages/about";
import MainPage from "../pages/main";
import RecipeSearch from "../pages/search-receipes";
import IMCPage from "../pages/imc";

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
    element: <IMCPage />,
  },
  { path: "BuscarReceitas", element: <RecipeSearch /> },
  { path: "ReceitasFavoritas", element: <FavoriteRecipe /> },
  { path: "DadosUsuario", element: <UserPage /> },
  { path: "Sobre", element: <AboutPage /> },
]);
