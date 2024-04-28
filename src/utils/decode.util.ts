import { jwtDecode } from "jwt-decode";
import { JWTBackend } from "../domain/interfaces/auth/auth.interface";
import moment from "moment-timezone";

export const tokenDecode = <T>(token: string): T => {
  const createDecode: T = jwtDecode(token);
  return createDecode;
};

export const expirationTokenAuth = (token: string): boolean => {
  moment.tz.setDefault("America/Lima");
  moment.locale("es");
  const { exp } = tokenDecode<JWTBackend>(token);

  return exp <= moment().unix();
};
