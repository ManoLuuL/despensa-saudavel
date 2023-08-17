import { createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  ErrorPage,
  FavoriteRecipe,
  MainPage,
  IMCPage,
  LoginPage,
  HomePage,
  RecipeSearch,
  RegisterPage,
  UserPage,
} from "../pages";

export const pagesRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
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
    path: "Home",
    element: <HomePage />,
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
