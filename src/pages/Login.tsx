import { Card } from "../components/card";
import { RootState } from "../redux/store";
import { LoginForm } from "../components/form";
import { useAppSelector } from "../redux/hook";
import { Navigate } from "react-router-dom";


export const Login = () => {
  const { isAuth } = useAppSelector((state: RootState) => state.auth);

  return isAuth ? <Navigate to={'/'} replace /> : (
    <main className="flex h-screen w-screen">
      <div className="hidden h-screen bg-totos bg-cover bg-center sm:flex md:w-1/2 xl:w-2/3"></div>
      <div className="flex w-full items-start justify-center bg-[#EFF3F3] px-10 md:w-1/2 xl:w-1/3 2xl:px-16">
        <Card className="gap-6">
          <div>
            <img src="/src/assets/img/logo.svg" alt="logo" className="h-20" />
          </div>
          <LoginForm />
        </Card>
      </div>
    </main>
  );
};
