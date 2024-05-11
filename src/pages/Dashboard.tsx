import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Sidebar } from "../components/sidebar";

export const Dashboard = () => {
  const [, setCookie] = useCookies();
  const { isAuth, token } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => (token ? setCookie("token", token, { path: "/" }) : () => {}), [token]);

  return isAuth ? (
    <main className="flex w-screen bg-light">
      <Sidebar />
      <Outlet />
    </main>
  ) : (
    <Navigate to={"/login"} replace />
  );
};
