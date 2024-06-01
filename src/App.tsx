import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import DashboardContent from "./pages/content/dashboard/DashboardContent";
import PerfilesContent from "./pages/content/perfiles/PerfilesContent";
import UsuariosContent from "./pages/content/usuarios/UsuariosContent";
import SedesContent from "./pages/content/sedes/SedesContent";

export const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        { path: "/login", element: <Login /> },
        {
          path: "/",
          element: <Dashboard />,
          children: [
            { path: "/dashboard", element: <DashboardContent /> },
            { path: "/personal/perfiles", element: <PerfilesContent /> },
            { path: "/personal/usuarios", element: <UsuariosContent /> },
            { path: "/sedes", element: <SedesContent /> },
          ],
        },
      ])}
    />
  );
};
