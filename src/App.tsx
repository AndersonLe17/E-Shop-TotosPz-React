import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        { path: "/", element: <Dashboard /> },
        { path: "/login", element: <Login /> },
      ])}
    />
  );
};
