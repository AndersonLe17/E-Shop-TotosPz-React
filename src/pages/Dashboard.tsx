import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export const Dashboard = () => {
  const [, setCookie, remove] = useCookies();
  const { isAuth, token, isExp } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => (token ? setCookie("token", token, { path: "/" }) : () => {}), [token]);
  useEffect(() => {
    if (isExp) {
      remove("token");
      remove("jwt");
    }
  }, [isExp]);

  return isAuth ? <div>Dashboard</div> : <Navigate to={"/login"} replace />;
};
