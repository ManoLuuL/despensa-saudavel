import { createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  ErrorPage,
  FavoriteRecipe,
  HomePage,
  IMCPage,
  LoginPage,
  MainPage,
  RecipeSearch,
  RegisterPage,
  UserPage,
} from "../pages";

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
