import { Input } from "../input";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { useState } from "react";
import { AuthData, authThunk } from "../../redux/features/auth/thunk/authThunk";
import { RootState } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const LoginForm = () => {
  const { errorMsg, /*isLoading*/ } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const [auth, setAuth] = useState<AuthData>({
      username: "aorellana",
      password: "77531657",
    });
  const { username, password } = auth;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authThunk(auth));
    // const res = await axiosNoAuth
    //   .post("/auth/login", JSON.stringify({ username, password }))
    //   .then((res) => res.data)
    //   .catch((err) => err.response.data);
    // if (res.code === 200) {
    //   // navigate("/");
    // } else if (res.code === 401) {
    //   setErrorMsg(res.errors[0].msg);
    // }
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-5">
      <h2 className="font-inter text-4xl font-semibold">Ingrese a su cuenta</h2>
      <Input name="username" label="Username" placeholder="Ingrese su nombre de usuario" value={username} onChange={changeHandler} />
      <Input name="password" label="Contraseña" placeholder="Ingrese su contraseña" type="password" value={password} onChange={changeHandler} />
      {errorMsg ? <span className="rounded-md bg-danger-200 p-2 font-inter font-medium text-danger">{errorMsg}</span> : ""}
      <div className="flex justify-end">
        <Link to={"/"} className="text-sm font-medium underline">
          Olvide mi contraseña
        </Link>
      </div>
      <Button type="submit">Iniciar Sesión</Button>
    </form>
    // <form onSubmit={submitHandler} className="flex flex-col gap-5">
    //   <h2 className="font-inter text-4xl font-semibold">Ingrese a su cuenta</h2>
    //   <Input name="username" label="Username" placeholder="Ingrese su nombre de usuario" value={username} onChange={changeHandler} />
    //   <Input name="password" label="Contraseña" placeholder="Ingrese su contraseña" type="password" value={password} onChange={changeHandler} />
    //   {errorMsg ? <span className="rounded-md bg-danger-200 p-2 font-inter font-medium text-danger">{errorMsg}</span> : ""}
    //   <div className="flex justify-end">
    //     <Link to={"/"} className="text-sm font-medium underline">
    //       Olvide mi contraseña
    //     </Link>
    //   </div>
    //   <Button type="submit">Iniciar Sesión</Button>
    // </form>
  );
};

export default LoginForm;
