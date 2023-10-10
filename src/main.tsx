import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "primereact/resources/themes/mdc-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { DarkTheme } from "./styles/theme.ts";
import { pagesRoutes } from "./routes/pages-routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={DarkTheme}>
      <ToastContainer theme="light" />
      <RouterProvider router={pagesRoutes} />
    </ThemeProvider>
  </React.StrictMode>
);
