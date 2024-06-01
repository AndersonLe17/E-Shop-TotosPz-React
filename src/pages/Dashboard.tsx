import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Sidebar } from "../components/sidebar";
import { ToastContainer } from "react-toastify";

export const Dashboard = () => {
  const [, setCookie] = useCookies();
  const { isAuth, token } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => (token ? setCookie("token", token, { path: "/" }) : () => {}), [token]);

  return isAuth ? (
    <main className="flex h-full bg-light">
      <Sidebar />
      <Outlet />
      <ToastContainer />
    </main>
  ) : (
    <Navigate to={"/login"} replace />
  );
};
