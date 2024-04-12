import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";

export const Dashboard = () => {
  const { isAuth } = useAppSelector((state: RootState) => state.auth);

  return isAuth ? <div>Dashboard</div> : <Navigate to={"/login"} replace />;
};
